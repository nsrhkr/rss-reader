import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

export type RSSItem = {
  siteId: string;
  title: string;
  url: string;
  date: Date;
  strDate: string;
  description: string;
};

export type RSSContextType = {
  RSSItemList: Array<RSSItem>;
  loading: boolean;
};

export const RSSContextInit: RSSContextType = {
  RSSItemList: [],
  loading: false,
};

// RSSデータのコンテキスト
const RSSContext = createContext<RSSContextType>(RSSContextInit);
export const useRSSContext = () => useContext(RSSContext);

// RSSデータのコンテキストのセッター
const setRSSContext = createContext<Dispatch<SetStateAction<RSSContextType>>>(() => {});
export const useSetRSSContext = () => useContext(setRSSContext);

// プロバイダ
export const RSSProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [RSSDataList, setRSSDataList] = useState<RSSContextType>(RSSContextInit);

  return (
    <RSSContext.Provider value={RSSDataList}>
      <setRSSContext.Provider value={setRSSDataList}>{children}</setRSSContext.Provider>
    </RSSContext.Provider>
  );
};

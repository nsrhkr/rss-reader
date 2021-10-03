import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

export type RSSItem = {
  siteId: string;
  title: string;
  url: string;
  date: Date;
  strDate: string;
  description: string;
};

const RSSContext = createContext<Array<RSSItem>>([]);

const setRSSContext = createContext<Dispatch<SetStateAction<Array<RSSItem>>>>(() => {});

export const useRSSContext = () => useContext(RSSContext);
export const useSetRSSContext = () => useContext(setRSSContext);

export const RSSProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [RSSDataList, setRSSDataList] = useState<Array<RSSItem>>([]);

  return (
    <RSSContext.Provider value={RSSDataList}>
      <setRSSContext.Provider value={setRSSDataList}>{children}</setRSSContext.Provider>
    </RSSContext.Provider>
  );
};

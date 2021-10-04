import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

export type SubscribeSite = {
  id: string;
  name: string;
  url: string;
  domainName: string;
};

export type SubscribeSiteContextType = {
  SubscribeSiteList: Array<SubscribeSite>;
  loading: boolean;
};

export const SubscribeSiteContextInit = {
  SubscribeSiteList: [],
  loading: false,
};

// 購読するサイトの配列のコンテキスト
const SubscribeSiteContext = createContext<SubscribeSiteContextType>(SubscribeSiteContextInit);
export const useSubscribeSiteContext = () => useContext(SubscribeSiteContext);

// 購読するサイトの配列のセッター
const setSubscribeSiteContext = createContext<Dispatch<SetStateAction<SubscribeSiteContextType>>>(() => {});
export const useSetSubscribeSiteContext = () => useContext(setSubscribeSiteContext);

// プロバイダ
export const SubscribeSiteProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [siteList, setSiteList] = useState<SubscribeSiteContextType>(SubscribeSiteContextInit);

  return (
    <SubscribeSiteContext.Provider value={siteList}>
      <setSubscribeSiteContext.Provider value={setSiteList}>{children}</setSubscribeSiteContext.Provider>
    </SubscribeSiteContext.Provider>
  );
};

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

export type SubscribeSite = {
  id: string;
  name: string;
  url: string;
  domainName: string;
};

const SubscribeSiteContext = createContext<Array<SubscribeSite>>([]);

const setSubscribeSiteContext = createContext<Dispatch<SetStateAction<Array<SubscribeSite>>>>(() => {});

export const useSubscribeSiteContext = () => useContext(SubscribeSiteContext);
export const useSetSubscribeSiteContext = () => useContext(setSubscribeSiteContext);

export const SubscribeSiteProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [siteList, setSiteList] = useState<Array<SubscribeSite>>([]);

  return (
    <SubscribeSiteContext.Provider value={siteList}>
      <setSubscribeSiteContext.Provider value={setSiteList}>{children}</setSubscribeSiteContext.Provider>
    </SubscribeSiteContext.Provider>
  );
};

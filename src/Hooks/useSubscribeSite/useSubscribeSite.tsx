import { v4 as uuidv4 } from "uuid";

import { RSS2json } from "../../api";
import { useRSSData } from "../useRSSData";
import { SubscribeSite, useSubscribeSiteContext, useSetSubscribeSiteContext } from "../../Contexts/SubscribeSiteContext";

const SUBSCRIBE_SITE = "subscribeSite";

export const useSubscribeSite = () => {
  const siteList = useSubscribeSiteContext();
  const setSiteList = useSetSubscribeSiteContext();
  const { mergeRSSList } = useRSSData();

  // 配信サイトをローカルストレージから取得
  const initSubscribeSite = () => {
    try {
      const value = localStorage.getItem(SUBSCRIBE_SITE);
      if (value !== null) {
        const json = JSON.parse(value);
        setSiteList(json);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 配信サイトを追加
  const addSubscribeSite = (url: string, json: RSS2json) => {
    let isRegistered = false;

    siteList.forEach((item) => {
      if (item.url === url) {
        isRegistered = true;
      }
    });

    if (isRegistered) {
      // すでに登録されている
      console.log("This site is already registered.");
    } else {
      // let newSiteData: SubscribeSite = {} as SubscribeSite;
      let newSiteData: SubscribeSite = {
        id: "",
        name: "",
        url: "",
        domainName: "",
      };
      newSiteData.id = uuidv4();
      newSiteData.name = json.feed.title;
      newSiteData.domainName = new URL(url).origin;
      newSiteData.url = url;
      console.log([...siteList, newSiteData]);
      setSiteList([...siteList, newSiteData]);
      mergeRSSList(newSiteData, json);
      localStorage.setItem(SUBSCRIBE_SITE, JSON.stringify(siteList));
    }
  };

  // 配信サイト情報をlocalStorageから削除
  const deleteSubscribeSite = () => {};

  return { initSubscribeSite, addSubscribeSite, deleteSubscribeSite };
};

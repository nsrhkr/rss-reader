import { v4 as uuidv4 } from "uuid";

import { RSS2json } from "../../api";
import { useRSSData } from "../useRSSData";
import { SubscribeSite, SubscribeSiteContextInit, useSubscribeSiteContext, useSetSubscribeSiteContext } from "../../Contexts/SubscribeSiteContext";
import { RSSContextInit, useSetRSSContext } from "../../Contexts/RSSContext";

// ローカルストレージに持つキー名
const SUBSCRIBE_SITE = "subscribeSite";

// 購読サイト一覧のフック
export const useSubscribeSite = () => {
  const siteContext = useSubscribeSiteContext();
  const setSiteContext = useSetSubscribeSiteContext();
  const setRSSContext = useSetRSSContext();
  const { getRSSData, mergeRSSList, deleteRSSData } = useRSSData();

  // 配信サイトをローカルストレージから取得
  const initSubscribeSite = () => {
    try {
      const value = localStorage.getItem(SUBSCRIBE_SITE);
      if (value !== null) {
        const list = JSON.parse(value);
        setSiteContext({
          SubscribeSiteList: list,
          loading: false,
        });
        getRSSData(list);
      }
    } catch (error) {
      alert("購読するサイト一覧の読み込みに失敗しました");
    }
  };

  // 配信サイトを追加
  const addSubscribeSite = (url: string, json: RSS2json) => {
    let isRegistered = false;

    siteContext.SubscribeSiteList.forEach((item) => {
      if (item.url === url) {
        isRegistered = true;
      }
    });

    if (isRegistered) {
      // すでに登録されている
      alert("すでに登録されています");
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
      setSiteContext({ SubscribeSiteList: [...siteContext.SubscribeSiteList, newSiteData], loading: false });
      mergeRSSList(newSiteData, json);
      localStorage.setItem(SUBSCRIBE_SITE, JSON.stringify([...siteContext.SubscribeSiteList, newSiteData]));
    }
  };

  // 指定された配信サイト情報をローカルストレージとRSSデータ一覧から削除
  const deleteSubscribeSite = (id: string) => {
    const newList = siteContext.SubscribeSiteList.filter((item) => item.id !== id);
    setSiteContext({ SubscribeSiteList: newList, loading: false });
    deleteRSSData(id);
    localStorage.setItem(SUBSCRIBE_SITE, JSON.stringify(newList));
  };

  // 配信サイト情報をキーごとローカルストレージから削除
  const resetSubscribeSite = () => {
    localStorage.removeItem(SUBSCRIBE_SITE);
    setSiteContext(SubscribeSiteContextInit);
    setRSSContext(RSSContextInit);
  };

  return { initSubscribeSite, addSubscribeSite, deleteSubscribeSite, resetSubscribeSite };
};

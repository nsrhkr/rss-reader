import { fetchRSS, RSS2json } from "../../api";
import { RSSItem, useRSSContext, useSetRSSContext } from "../../Contexts/RSSContext";
import { SubscribeSite } from "../../Contexts/SubscribeSiteContext";
import { dateToString } from "../../utils/date";

// RSSデータのフック
export const useRSSData = () => {
  const RSSList = useRSSContext();
  const setRSSList = useSetRSSContext();

  // 購読サイト一覧からRSSを取得
  const getRSSData = async (siteList: SubscribeSite[]) => {
    const newList = await asyncLoop(siteList);
    newList.sort(compare);
    setRSSList(newList);
  };

  // 購読サイト配列を回しながらfetch
  const asyncLoop = async (siteList: SubscribeSite[]) => {
    let newList: Array<RSSItem> = [];
    await Promise.all(
      siteList.map(async (siteItem) => {
        try {
          const response = await fetchRSS(siteItem.url);
          const json: RSS2json = await response.json();
          newList = newList.concat(formatList(siteItem, json));
        } catch (error) {
          console.log(error);
        }
      })
    );
    console.log(newList);
    return newList;
  };

  // rss2jsonから受け取ったjsonから表示用のRSSデータ配列を作成
  const formatList = (siteItem: SubscribeSite, json: RSS2json) => {
    let newList: Array<RSSItem> = [];
    console.log(json.items);
    newList = json.items.map((item) => {
      // let item: RSSItem = {} as RSSItem;
      let newItem: RSSItem = {
        siteId: "",
        title: "",
        url: "",
        date: new Date(),
        strDate: "",
        description: "",
      };
      newItem.siteId = siteItem.id;
      newItem.title = item.title;
      newItem.date = new Date(item.pubDate);
      newItem.strDate = dateToString(newItem.date);
      newItem.url = item.link;
      newItem.description = item.description;
      return newItem;
    });
    return newList;
  };

  // RSSデータ配列に新たなサイトのデータをマージ
  const mergeRSSList = (siteItem: SubscribeSite, json: RSS2json) => {
    let newList = RSSList.concat(formatList(siteItem, json));
    newList.sort(compare);
    setRSSList(newList);
  };

  // RSSデータ配列から指定されたサイトのRSSデータを削除
  const deleteRSSData = (siteId: string) => {
    const newList = RSSList.filter((item) => item.siteId !== siteId);
    setRSSList(newList);
  };

  // RSSデータ配列を日付が新しい順にソートする比較関数
  const compare = (a: RSSItem, b: RSSItem) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  };

  return { getRSSData, mergeRSSList, deleteRSSData };
};

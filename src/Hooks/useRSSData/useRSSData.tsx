import { fetchRSS, RSS2json } from "../../api";
import { RSSItemType, useRSSContext, useSetRSSContext } from "../../Contexts/RSSContext";
import { SubscribeSite } from "../../Contexts/SubscribeSiteContext";
import { dateToString } from "../../utils/date";

// RSSデータのフック
export const useRSSData = () => {
  const RSSContext = useRSSContext();
  const setRSSList = useSetRSSContext();

  // 購読サイト一覧からRSSを取得
  const getRSSData = async (siteList: SubscribeSite[]) => {
    setRSSList({
      RSSItemList: [],
      loading: true,
    });
    const newList = await asyncLoop(siteList);
    newList.sort(compare);
    setRSSList({
      RSSItemList: newList,
      loading: false,
    });
  };

  // 購読サイト配列を回しながらfetch
  const asyncLoop = async (siteList: SubscribeSite[]) => {
    let newList: Array<RSSItemType> = [];
    await Promise.all(
      siteList.map(async (siteItem) => {
        try {
          const response = await fetchRSS(siteItem.url);
          const json: RSS2json = await response.json();
          newList = newList.concat(formatList(siteItem, json));
        } catch (error) {
          setRSSList({
            RSSItemList: RSSContext.RSSItemList,
            loading: false,
          });
          alert("RSSの読み込みに失敗しました");
        }
      })
    );
    return newList;
  };

  // rss2jsonから受け取ったjsonから表示用のRSSデータ配列を作成
  const formatList = (siteItem: SubscribeSite, json: RSS2json) => {
    let newList: Array<RSSItemType> = [];
    newList = json.items.map((item) => {
      // let item: RSSItem = {} as RSSItem;
      let newItem: RSSItemType = {
        siteId: "",
        domainName: "",
        title: "",
        url: "",
        date: new Date(),
        strDate: "",
        description: "",
      };
      newItem.siteId = siteItem.id;
      newItem.domainName = siteItem.domainName;
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
    setRSSList({
      RSSItemList: RSSContext.RSSItemList,
      loading: true,
    });
    let newList = RSSContext.RSSItemList.concat(formatList(siteItem, json));
    newList.sort(compare);
    setRSSList({
      RSSItemList: newList,
      loading: false,
    });
  };

  // RSSデータ配列から指定されたサイトのRSSデータを削除
  const deleteRSSData = (siteId: string) => {
    setRSSList({
      RSSItemList: RSSContext.RSSItemList,
      loading: true,
    });
    const newList = RSSContext.RSSItemList.filter((item) => item.siteId !== siteId);
    setRSSList({
      RSSItemList: newList,
      loading: false,
    });
  };

  // RSSデータ配列を日付が新しい順にソートする比較関数
  const compare = (a: RSSItemType, b: RSSItemType) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  };

  return { getRSSData, mergeRSSList, deleteRSSData };
};

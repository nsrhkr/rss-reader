import React, { useState } from "react";

import { fetchRSS } from "../../api";
import { useRSSContext, useSetRSSContext } from "../../Contexts/RSSContext";
import { useSetSubscribeSiteContext, useSubscribeSiteContext } from "../../Contexts/SubscribeSiteContext";
import { useSubscribeSite } from "../useSubscribeSite";

// 入力されたRSS URLのフック
export const useInputRSSURL = () => {
  const [value, setValue] = useState("");
  const { addSubscribeSite } = useSubscribeSite();
  const siteContext = useSubscribeSiteContext();
  const setSiteContext = useSetSubscribeSiteContext();
  const RSSContext = useRSSContext();
  const setRSSList = useSetRSSContext();

  // 入力値を更新
  const hundleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // 入力値を登録
  const submit: React.FormEventHandler<HTMLFormElement | HTMLInputElement> = (event: React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
    event.preventDefault();
    if (value !== "") {
      addSite(value);
      setValue("");
    }
  };

  // 購読サイトを追加
  const addSite = async (url: string) => {
    setSiteContext({
      SubscribeSiteList: siteContext.SubscribeSiteList,
      loading: true,
    });
    setRSSList({
      RSSItemList: RSSContext.RSSItemList,
      loading: true,
    });
    try {
      const response = await fetchRSS(url);
      const json = await response.json();
      addSubscribeSite(url, json);
    } catch (error) {
      setSiteContext({
        SubscribeSiteList: siteContext.SubscribeSiteList,
        loading: false,
      });
      setRSSList({
        RSSItemList: RSSContext.RSSItemList,
        loading: false,
      });
      alert("RSSの読み込みに失敗しました");
    }
  };

  return { value, hundleChange, submit };
};

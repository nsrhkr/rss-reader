import React, { useState } from "react";

import { fetchRSS } from "../../api";
import { useSubscribeSite } from "../useSubscribeSite";

// 入力されたRSS URLのフック
export const useInputRSSURL = () => {
  const [value, setValue] = useState("");
  const { addSubscribeSite } = useSubscribeSite();

  // 入力値を更新
  const hundleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // 入力値を登録
  const submit: React.FormEventHandler<HTMLFormElement | HTMLInputElement> = (event: React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
    event.preventDefault();
    if (checkXml(value)) {
      addSite(value);
      setValue("");
    }
  };

  // xmlのパスかチェック
  const checkXml = (url: string): boolean => {
    return /.+\.xml/.test(url);
  };

  // 購読サイトを追加
  const addSite = async (url: string) => {
    try {
      const response = await fetchRSS(url);
      const json = await response.json();
      addSubscribeSite(url, json);
    } catch (error) {
      alert("RSSの読み込みに失敗しました");
    }
  };

  return { value, hundleChange, submit };
};

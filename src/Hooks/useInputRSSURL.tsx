import React, { useState } from "react";

export const useInputRSSURL = () => {
  const [value, setValue] = useState("");

  // 入力値を更新
  const hundleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // 入力値を登録
  const submit: React.FormEventHandler<HTMLFormElement | HTMLInputElement> = (event: React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
    event.preventDefault();
    if (checkXml(value)) {
      console.log(value);
      // addSite(url);
      setValue("");
    }
  };

  // xmlのパスかチェック
  const checkXml = (url: string): boolean => {
    return /.+\.xml/.test(url);
  };

  // 購読サイトを追加
  //   const addSite = (url) => {
  //     const newSite = { key: nanoid(), taskName: taskName, done: false };
  //     setSite([newSite, ...site]);
  //   };

  return { value, hundleChange, submit };
};

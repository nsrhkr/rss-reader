import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("RSS Reader画面を表示する", () => {
  const { getByText } = render(<App />);
  getByText("RSS Reader"); // メニュー
  getByText("新着記事"); // メインコンテンツ
});

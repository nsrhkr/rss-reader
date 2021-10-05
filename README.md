# RSS Reader

[rss to json](https://rss2json.com/, "rss to json online converter") API を用いた簡易 RSS リーダー

![demo](https://github.com/nsrhkr/rss-reader/wiki/images/demo.gif)

## 機能要件

- 画面表示時に local storage に保存している購読対象サイト一覧を元に、購読対象サイト一覧と RSS から取得した更新情報を表示
- URL 入力欄に購読対象サイトの RSS URL を入力し追加ボタンを押すことで、購読対象サイトと RSS から取得した更新情報を追加表示（購読対象サイトは local strage に保存）
- 削除ボタンを押すことで画面から購読対象サイト一覧と RSS から取得した更新情報を削除（購読対象サイトは local strage からも削除）
- リセットボタンを押すことで購読対象サイト一覧と RSS から取得した更新情報をすべて削除（購読対象サイトは local strage からキーごと削除）

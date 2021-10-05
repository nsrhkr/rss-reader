import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { RSSItem, RSSItemSkeleton } from "../../Parts/RSSItem";
import { useRSSContext } from "../../../Contexts/RSSContext";

const ListArea = styled.div`
  width: 100%;
  max-width: 700px;
  min-width: 400px;
  padding-bottom: 100px;
  box-sizing: border-box;

  div {
    margin-bottom: 10px;
  }
`;

// 配信されたコンテンツ一覧
export const RSSList = () => {
  const RSSContext = useRSSContext();
  return (
    <ListArea>
      {RSSContext.loading ? (
        <>
          <RSSItemSkeleton />
          <RSSItemSkeleton />
          <RSSItemSkeleton />
        </>
      ) : null}
      {RSSContext.RSSItemList.map((item) => {
        return <RSSItem key={uuidv4()} RSSItem={item} />;
      })}
    </ListArea>
  );
};

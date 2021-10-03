import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { RSSItem } from "../RSSItem";
import { useRSSContext } from "../../../Contexts/RSSContext";

const ListArea = styled.div`
  width: 100%;
  max-width: 700px;
  min-width: 400px;

  div {
    margin-bottom: 10px;
  }
`;

export const RSSList = () => {
  const RSSDataList = useRSSContext();
  return (
    <ListArea>
      {RSSDataList.map((item) => {
        return <RSSItem key={uuidv4()} title={item.title} url={item.url} strDate={item.strDate} description={item.description} />;
      })}
    </ListArea>
  );
};

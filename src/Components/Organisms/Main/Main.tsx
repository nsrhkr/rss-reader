import styled from "styled-components";

import { MainHeader } from "../../Atoms/MainHeader";
import { RSSList } from "../../Molecules/RSSList";

const MainArea = styled.div`
  width: calc(100% - 350px);
  background-color: #fff;
  padding: 0 20px 0 40px;
`;

// メインコンテンツ
export const Main = () => {
  return (
    <MainArea>
      <MainHeader />
      <RSSList />
    </MainArea>
  );
};

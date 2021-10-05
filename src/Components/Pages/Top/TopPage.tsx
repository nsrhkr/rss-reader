import { useLayoutEffect } from "react";
import styled from "styled-components";

import { useSubscribeSite } from "../../../Hooks/useSubscribeSite";
import { Menu } from "../../Components/Menu";
import { Main } from "../../Components/Main";

const Top = styled.div`
  display: flex;
  height: 100%;
`;

// トップページ
export const TopPage = () => {
  const { initSubscribeSite } = useSubscribeSite();

  useLayoutEffect(() => {
    initSubscribeSite();
  }, []);

  return (
    <Top>
      <Menu />
      <Main />
    </Top>
  );
};

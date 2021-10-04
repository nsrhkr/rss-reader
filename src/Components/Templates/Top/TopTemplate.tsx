import styled from "styled-components";
import { Menu } from "../../Organisms/Menu";
import { Main } from "../../Organisms/Main";

const All = styled.div`
  display: flex;
  height: 100%;
`;

// テンプレート
export const TopTemplate = () => {
  return (
    <All>
      <Menu />
      <Main />
    </All>
  );
};

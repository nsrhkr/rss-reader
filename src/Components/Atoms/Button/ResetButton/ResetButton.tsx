import styled from "styled-components";
import { useSubscribeSite } from "../../../../Hooks/useSubscribeSite";

const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 4px;
  border: 0;
  background-color: #d3d3d3;
  color: #696969;
  font-size: 14px;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ResetButton = () => {
  const { resetSubscribeSite } = useSubscribeSite();
  return <Button onClick={() => resetSubscribeSite()}>リセット</Button>;
};

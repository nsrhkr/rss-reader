import styled from "styled-components";

const Button = styled.button`
  width: 50px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  background-color: #55c500;
  color: #fff;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const SubscribeSiteAddButton = () => {
  return <Button>追加</Button>;
};

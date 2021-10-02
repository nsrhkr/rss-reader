import styled from "styled-components";

const Input = styled.input`
  width: 250px;
  height: 40px;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #696969;
  border-radius: 4px;

  ::placeholder {
    color: #c0c0c0;
  }
`;

export const SubscribeSiteInput = () => {
  return <Input type="text" placeholder="RSS URL" />;
};

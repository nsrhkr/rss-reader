import React from "react";
import styled from "styled-components";

type SubscribeSiteAddButtonProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement | HTMLInputElement>;
};

const Button = styled.input`
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

export const SubscribeSiteAddButton = (props: SubscribeSiteAddButtonProps) => {
  const { onSubmit } = props;
  return <Button type="submit" value="追加" onSubmit={onSubmit} />;
};

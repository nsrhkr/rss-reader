import styled from "styled-components";

import { TrushIcon } from "../../Icon/TrushIcon";

const Button = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 3px;
  border: 0;
  background-color: #f2f2f2;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const SubscribeSiteDeleteButton = () => {
  return (
    <Button>
      <TrushIcon />
    </Button>
  );
};

import styled from "styled-components";
import { useSubscribeSite } from "../../../../Hooks/useSubscribeSite";

import { TrushIcon } from "../../Icon/TrushIcon";

type SubscribeSiteDeleteButtonProps = {
  id: string;
};

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

// 購読サイト削除ボタン
export const SubscribeSiteDeleteButton = (props: SubscribeSiteDeleteButtonProps) => {
  const { id } = props;
  const { deleteSubscribeSite } = useSubscribeSite();

  return (
    <Button onClick={() => deleteSubscribeSite(id)}>
      <TrushIcon />
    </Button>
  );
};

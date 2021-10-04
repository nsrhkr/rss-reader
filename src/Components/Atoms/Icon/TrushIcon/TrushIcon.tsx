import styled from "styled-components";

import trush from "../../../../assets/images/trush.svg";

const TrushImage = styled.img`
  width: 16px;
  height: 16px;
`;

// ゴミ箱アイコン
export const TrushIcon = () => {
  return <TrushImage src={trush} alt="削除" />;
};

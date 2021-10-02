import styled from "styled-components";

import { SubscribeSiteAddButton } from "../../Atoms/Button/SubscribeSiteAddButton";
import { SubscribeSiteInput } from "../../Atoms/Input/SubscribeSiteInput";

const SubscribeSiteInputFormArea = styled.div`
  display: flex;
`;

const SubscribeSiteInputArea = styled.div`
  padding-right: 4px;
`;

export const SubscribeSiteInputForm = () => {
  return (
    <SubscribeSiteInputFormArea>
      <SubscribeSiteInputArea>
        <SubscribeSiteInput />
      </SubscribeSiteInputArea>
      <SubscribeSiteAddButton />
    </SubscribeSiteInputFormArea>
  );
};

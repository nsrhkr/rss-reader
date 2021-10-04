import styled from "styled-components";

import { SubscribeSiteAddButton } from "../../Atoms/Button/SubscribeSiteAddButton";
import { SubscribeSiteInput } from "../../Atoms/Input/SubscribeSiteInput";
import { useInputRSSURL } from "../../../Hooks/useInputRSSURL";

const SubscribeSiteInputFormArea = styled.form`
  display: flex;
`;

const SubscribeSiteInputArea = styled.div`
  padding-right: 4px;
`;

// 購読するサイトのURLの入力フォーム
export const SubscribeSiteInputForm = () => {
  const { value, hundleChange, submit } = useInputRSSURL();
  return (
    <SubscribeSiteInputFormArea onSubmit={submit}>
      <SubscribeSiteInputArea>
        <SubscribeSiteInput value={value} onChange={hundleChange} />
      </SubscribeSiteInputArea>
      <SubscribeSiteAddButton onSubmit={submit} />
    </SubscribeSiteInputFormArea>
  );
};

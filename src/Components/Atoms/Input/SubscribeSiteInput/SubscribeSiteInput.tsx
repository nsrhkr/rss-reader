import styled from "styled-components";

type SubscribeSiteInputProps = {
  value: string;
  onChange: any;
};

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

// URL テキスト入力
export const SubscribeSiteInput = (props: SubscribeSiteInputProps) => {
  const { value, onChange } = props;
  return <Input type="url" value={value} placeholder="RSS URL" pattern="https://.*" onChange={onChange} required />;
};

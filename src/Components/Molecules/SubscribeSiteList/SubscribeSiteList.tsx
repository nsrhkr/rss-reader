import styled from "styled-components";

import { SubscribeSiteItem } from "../SubscribeSiteItem";
import { useSubscribeSiteContext } from "../../../Contexts/SubscribeSiteContext";

const SubscribeSiteListArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  box-sizing: border-box;
  padding-bottom: 20px;
`;

export const SubscribeSiteList = () => {
  const siteList = useSubscribeSiteContext();
  return (
    <SubscribeSiteListArea>
      {siteList.map((item) => {
        return <SubscribeSiteItem key={item.id} id={item.id} domainName={item.domainName} name={item.name} />;
      })}
    </SubscribeSiteListArea>
  );
};

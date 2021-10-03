import styled from "styled-components";

import { SubscribeSiteItem } from "../SubscribeSiteItem";
import { useSubscribeSiteContext } from "../../../Contexts/SubscribeSiteContext";

const SubscribeSiteListArea = styled.div`
  display: flex;
  width: 350px;
  min-height: calc(100vh - 160px);
`;

export const SubscribeSiteList = () => {
  const siteList = useSubscribeSiteContext();
  return (
    <SubscribeSiteListArea>
      {siteList.map((item) => {
        return <SubscribeSiteItem key={item.id} domainName={item.domainName} name={item.name} />;
      })}
    </SubscribeSiteListArea>
  );
};

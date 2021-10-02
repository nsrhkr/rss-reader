import { memo } from "react";
import styled from "styled-components";

import { SubscribeSiteDeleteButton } from "../../Atoms/Button/SubscribeSiteDeleteButton";

type RSSItemProps = {
  domainName: string;
  siteName: string;
};

const SubscribeSiteItemArea = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 50px;
  padding-left: 10px;
`;

const Favicon = styled.img`
  width: 16px;
  height: 16px;
`;

const SubscribeSiteName = styled.div`
  width: 273px;
  padding-left: 5px;
  font-size: 14px;
`;

export const SubscribeSiteItem = memo((props: RSSItemProps) => {
  const { domainName, siteName } = props;

  return (
    <SubscribeSiteItemArea>
      <Favicon src={`https://www.google.com/s2/favicons?domain=${domainName}`} />
      <SubscribeSiteName>{siteName}</SubscribeSiteName>
      <SubscribeSiteDeleteButton />
    </SubscribeSiteItemArea>
  );
});

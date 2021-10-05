import { memo } from "react";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { SubscribeSiteDeleteButton } from "../../Parts/Button/SubscribeSiteDeleteButton";

type RSSItemProps = {
  id: string;
  name: string;
  domainName: string;
};

const SubscribeSiteItemArea = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// 購読するサイト
export const SubscribeSiteItem = memo((props: RSSItemProps) => {
  const { id, domainName, name } = props;

  return (
    <SubscribeSiteItemArea>
      <Favicon src={`https://www.google.com/s2/favicons?domain=${domainName}`} />
      <SubscribeSiteName>{name}</SubscribeSiteName>
      <SubscribeSiteDeleteButton id={id} />
    </SubscribeSiteItemArea>
  );
});

export const SubscribeSiteItemSkeleton = () => {
  return (
    <SkeletonTheme color="#dcdcdc" highlightColor="#e8e8e8">
      <SubscribeSiteItemArea>
        <Skeleton width={16} height={16} />
        <SubscribeSiteName>
          <Skeleton />
        </SubscribeSiteName>
      </SubscribeSiteItemArea>
    </SkeletonTheme>
  );
};

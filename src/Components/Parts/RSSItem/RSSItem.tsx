import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

import { RSSItemType } from "../../../Contexts/RSSContext";

type RSSItemProps = {
  RSSItem: RSSItemType;
};

const ItemArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  padding: 20px;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
`;

const TitleArea = styled.div`
  display: flex;
  width: 100%;
`;

const Favicon = styled.img`
  width: 16px;
  height: 16px;
`;

const Title = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 5px;
  font-size: 18px;
  font-weight: bold;
`;

const LinkAndDateArea = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  margin: 5px 0;
  font-size: 14px;
`;

const LinkArea = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-right: 1px solid #c0c0c0;
`;

const DateArea = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const Description = styled.p`
  box-sizing: border-box;
  padding: 0 10px;
  font-size: 14px;
  line-height: 1.5em;
  text-overflow: ellipsis;
  color: #696969;
`;

// 配信されたコンテンツ
export const RSSItem = (props: RSSItemProps) => {
  const { RSSItem } = props;
  return (
    <ItemArea>
      <TitleArea>
        <Favicon src={`https://www.google.com/s2/favicons?domain=${RSSItem.domainName}`} />
        <Title>{RSSItem.title}</Title>
      </TitleArea>
      <LinkAndDateArea>
        <LinkArea>
          <a href={RSSItem.url}>元記事</a>
        </LinkArea>
        <DateArea>{RSSItem.strDate}</DateArea>
      </LinkAndDateArea>
      <Description>{RSSItem.description}</Description>
    </ItemArea>
  );
};

// 読み込み中に表示するスケルトン
export const RSSItemSkeleton = () => {
  return (
    <ItemArea>
      <TitleArea>
        <Skeleton width={16} height={16} />
        <Title>
          <Skeleton />
        </Title>
      </TitleArea>
      <LinkAndDateArea>
        <LinkArea>
          <Skeleton width={42} />
        </LinkArea>
        <DateArea>
          <Skeleton width={120} />
        </DateArea>
      </LinkAndDateArea>
      <Description>
        <Skeleton count={2} />
      </Description>
    </ItemArea>
  );
};

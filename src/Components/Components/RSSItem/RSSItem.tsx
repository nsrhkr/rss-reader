import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

type RSSItemProps = {
  title: string;
  url: string;
  strDate: string;
  description: string;
};

const ItemArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  padding: 20px;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
`;

const Title = styled.div`
  width: 100%;
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
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

// 配信されたコンテンツ
export const RSSItem = (props: RSSItemProps) => {
  const { title, url, strDate, description } = props;
  return (
    <ItemArea>
      <Title>{title}</Title>
      <LinkAndDateArea>
        <LinkArea>
          <a href={url}>元記事</a>
        </LinkArea>
        <DateArea>{strDate}</DateArea>
      </LinkAndDateArea>
      <Description>{description}</Description>
    </ItemArea>
  );
};

// 読み込み中に表示するスケルトン
export const RSSItemSkeleton = () => {
  return (
    <ItemArea>
      <Title>
        <Skeleton />
      </Title>
      <LinkAndDateArea>
        <LinkArea>
          <Skeleton width={42} />
        </LinkArea>
        <DateArea>
          <Skeleton width={120} />
        </DateArea>
      </LinkAndDateArea>
      <Description>
        <Skeleton count={4} />
      </Description>
    </ItemArea>
  );
};

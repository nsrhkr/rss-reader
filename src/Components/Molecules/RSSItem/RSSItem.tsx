import styled from "styled-components";

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
  animation-name: fadeup;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-iteration-count: 1;

  @keyframes fadeup {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
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

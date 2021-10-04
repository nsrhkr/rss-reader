import styled from "styled-components";
import { useSubscribeSiteContext } from "../../../Contexts/SubscribeSiteContext";

import { ResetButton } from "../../Atoms/Button/ResetButton";
import { SiteName } from "../../Atoms/SiteName";
import { SubscribeSiteInputForm } from "../../Molecules/SubscribeSiteInputForm";
import { SubscribeSiteList } from "../../Molecules/SubscribeSiteList";

const MenuArea = styled.div`
  background-color: #f2f2f2;
  width: 350px;
  min-height: 100vh;
  height: auto;
`;

const SiteNameArea = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 350px;
  height: 60px;
  padding-left: 10px;
`;

const RSSInputFormArea = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 350px;
  height: 100px;
  padding-left: 10px;
`;

const ResetButtonArea = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 350px;
  height: 60px;
  padding-left: 10px;
`;

// メニュー
export const Menu = () => {
  const list = useSubscribeSiteContext();
  return (
    <MenuArea>
      <SiteNameArea>
        <SiteName />
      </SiteNameArea>
      <RSSInputFormArea>
        <SubscribeSiteInputForm />
      </RSSInputFormArea>
      <SubscribeSiteList />
      {list.length === 0 ? null : (
        <ResetButtonArea>
          <ResetButton />
        </ResetButtonArea>
      )}
    </MenuArea>
  );
};

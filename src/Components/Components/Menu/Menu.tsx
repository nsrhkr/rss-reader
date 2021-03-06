import styled from "styled-components";
import { useSubscribeSiteContext } from "../../../Contexts/SubscribeSiteContext";

import { ResetButton } from "../../Parts/Button/ResetButton";
import { SiteName } from "../../Parts/SiteName";
import { SubscribeSiteInputForm } from "../../Components/SubscribeSiteInputForm";
import { SubscribeSiteList } from "../../Components/SubscribeSiteList";

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
  const siteContext = useSubscribeSiteContext();
  return (
    <MenuArea>
      <SiteNameArea>
        <SiteName />
      </SiteNameArea>
      <RSSInputFormArea>
        <SubscribeSiteInputForm />
      </RSSInputFormArea>
      {siteContext.SubscribeSiteList.length === 0 ? null : (
        <ResetButtonArea>
          <ResetButton />
        </ResetButtonArea>
      )}
      <SubscribeSiteList />
    </MenuArea>
  );
};

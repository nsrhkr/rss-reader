import { useLayoutEffect } from "react";
import { useSubscribeSite } from "../../../Hooks/useSubscribeSite";
import { TopTemplate } from "../../Templates/Top";

export const TopPage = () => {
  const { initSubscribeSite } = useSubscribeSite();

  useLayoutEffect(() => {
    initSubscribeSite();
  }, []);
  return <TopTemplate />;
};

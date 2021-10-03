import "./App.css";
import { TopPage } from "./Components/Pages/Top";
import { SubscribeSiteProvider } from "./Contexts/SubscribeSiteContext";
import { RSSProvider } from "./Contexts/RSSContext";

function App() {
  return (
    <SubscribeSiteProvider>
      <RSSProvider>
        <TopPage />
      </RSSProvider>
    </SubscribeSiteProvider>
  );
}

export default App;

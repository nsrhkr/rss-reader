import "./App.css";
import { TopPage } from "./Components/Pages/Top";
import { SubscribeSiteProvider } from "./Contexts/SubscribeSiteContext";

function App() {
  return (
    <SubscribeSiteProvider>
      <TopPage />
    </SubscribeSiteProvider>
  );
}

export default App;

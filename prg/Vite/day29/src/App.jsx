import { AppSettingsProvider } from "./context/AppSettingsContext";
import Settings from "./components/Settings";
import Content from "./components/Content";

function App() {
  return (
    <AppSettingsProvider>
      <Settings />
      <Content />
    </AppSettingsProvider>
  );
}

export default App;

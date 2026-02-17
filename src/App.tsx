import { Header } from "./components/header";
import { Section } from "./components/section";
import "./App.css";
import { AppProvider } from "./providers/app-provider";

function App() {
  return (
    <AppProvider>
      <main>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Section />
        </div>
      </main>
    </AppProvider>
  );
}

export default App;

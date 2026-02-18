import { Header } from "./components/header";
import "./App.css";
import { AppProvider } from "./providers/app-provider";
import { About } from "./components/about";

function App() {
  return (
    <AppProvider>
      <main>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <About />
        </div>
      </main>
    </AppProvider>
  );
}

export default App;

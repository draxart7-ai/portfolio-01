import { Header } from "./components/header";
import "./App.css";
import { AppProvider } from "./providers/app-provider";
import { About } from "./components/about";
import { Intro } from "./components/intro";

function App() {
  return (
    <AppProvider>
      <main>
        <div className="header">
          <Header />
        </div>
        <Intro />
        <div className="content">
          <About />
        </div>
      </main>
    </AppProvider>
  );
}

export default App;

import { Header } from "./components/header";
import { AppProvider } from "./providers/app-provider";
import { About } from "./components/about";
import { Intro } from "./components/intro";

function App() {
  return (
    <AppProvider>
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="intro">
          <Intro />
        </div>
        <div className="content">
          <About />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;

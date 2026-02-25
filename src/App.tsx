import { Header } from "./components/header";
import { AppProvider } from "./providers/app-provider";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Intro } from "./components/intro";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";

function App() {
  return (
    <AppProvider>
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="intro" style={{ marginBottom: "62px" }}>
          <Intro />
        </div>
        <div className="about">
          <About />
        </div>
        <div className="skills">
          <Skills />
        </div>
        <div className="gallery">
          <Gallery />
        </div>
        <div className="contact">
          <Contact />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;

import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Header } from "./components/header";
import "./App.css";

const client = generateClient<Schema>();

function App() {
  return (
    <main>
      <Header />
      <div>Section 1 </div>
      <div>Section 2 </div>
      <div>Section 3 </div>
      <div>Section 4 </div>
    </main>
  );
}

export default App;

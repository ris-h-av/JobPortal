import { useState } from "react";
import "./App.css";
import "./components/FrontPage";
import FrontPage from "./components/FrontPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FrontPage />
    </>
  );
}

export default App;

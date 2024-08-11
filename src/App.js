import { React, useState } from "react";
import Code from "./data";
import "./App.css";

function App() {
  const [x, setx] = useState(200);

  return (
    <div>
      <div className="div1">
        <Code name="Rania" age="21" country="fayoum" />
        <Code name="Rania" age="21" country="fayoum" />
        <Code name="Rania" age="21" country="fayoum" />
      </div>

      <button onClick={() => setx(x * 2)}>double</button>
      <button onClick={() => setx(x + 1)}>add</button>
      <button onClick={() => setx(x / 2)}>divide</button>
      <button onClick={() => setx(0)}>reset</button>
      {x}
    </div>
  );
}

export default App;

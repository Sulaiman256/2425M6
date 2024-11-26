import { useState } from "react";
import "./App.css";
import Saludo from "./Saludo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hola, React con Vite!</h1>
      <Saludo nombre="Juan" />
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
    </div>
  );
}

export default App;

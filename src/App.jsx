import React, { useState } from "react";
import ShowCount from "./components/ShowCount/ShowCount";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);

  return (
    <>
      <ShowCount count={count} />
      <div id="buttonsContainer">
        <Button buttonText={"Restar"} onClick={decrement} />
        <Button buttonText={"Sumar"} onClick={increment} />
      </div>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

import React, { useEffect, useState } from "react";
import TodoComponent from "./Todo/Todo";
import ListComponent from "./LoginForm/list";

//import MainCounter from "./Counter/counter";

//import Counter from "./Counter/counter";
//import MainCounter from "./Counter/counter";

function App() {
  return (
    <div>
      <TodoComponent />
    </div>
  );
}

function HooksComponent() {
  const [color, setColor] = useState("Pizza");
  return (
    <>
      <div className="colorLabel">My favourite food is {color}</div>
      <button
        className="btn btn-primary mt-4"
        onClick={() => setColor("Briyani")}
      >
        Change Color
      </button>
    </>
  );
}

function HooksCounterComponent() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(() => count + 1);
  //   }, 1000);
  // });
  return (
    <>
      <div className="colorLabel">Counter is {count}</div>
      <button
        className="btn btn-primary mt-4"
        onClick={() => setCount(() => count + 1)}
      >
        Update
      </button>
    </>
  );
}

export default App;

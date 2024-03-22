import React, { useState } from "react";

function App() {
  return (
    <div className="main">
      <Container />
    </div>
  );
}

function Container() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const addStep = () => {
    setStep((s) => s + 1);
    console.log(step);
  };

  const subStep = () => {
    setStep((s) => (s === 0 ? s : s - 1));
  };

  const addDate = () => {
    setCount((c) => c + 1);
  };

  const subDate = () => {
    setCount((c) => (c === 0 ? c : c - 1));
  };

  const date = () => {
    const curDate = new Date();
    curDate.setDate(curDate.getDate() + step * count);
    return curDate.toDateString();
  };

  return (
    <>
      <Counter content={`Step : ${step}`} add={addStep} sub={subStep} />
      <Counter content={`Count : ${count}`} add={addDate} sub={subDate} />
      <h3>{`${step * count} days from today is ${date()}`}</h3>
    </>
  );
}

function Counter({ content, add, sub }) {
  return (
    <div className="container">
      <button className="btn" onClick={sub}>
        -
      </button>
      <h4>{content}</h4>
      <button className="btn" onClick={add}>
        +
      </button>
    </div>
  );
}

export default App;

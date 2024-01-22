import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
  }

  function handleDecrement() {
    setCounter(counter - 1);
  }

  function incrementByTwo() {
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  }

  return (
    <div>
      <h2>カウンターアプリ</h2>
      <h1>カウンター: {counter}</h1>
      <button onClick={handleIncrement}>増加</button>
      <button onClick={handleDecrement}>減少</button>
      <button onClick={incrementByTwo}>+2</button>
    </div>
  );
}

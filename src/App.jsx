import React, { useState } from 'react';
import CatComponent from './CatComponent';
import TodoList from './TodoList';

function App() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
  }

  function handleDecrement() {
    setCounter(counter - 1);
  }

  function handleClick() {
    alert('送信しました！');
  }

  return (
    <div className="App">
      <h1>Hello, world</h1>
      <CatComponent />
      <TodoList />
      <button onClick={handleClick}>送信する</button>
      <div>
        <h2>カウンターアプリ</h2>
        <h1>カウンター: {counter}</h1>
        <button onClick={handleIncrement}>増加</button>
        <button onClick={handleDecrement}>減少</button>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import CatComponent from './CatComponent';
import TodoList from './TodoList';
import Counter from './Counter';
import UserInfoApp from './UseInfoApp';

function App() {
  function handleClick() {
    alert('送信しました！');
  }

  return (
    <div className="App">
      <h1>Hello, world</h1>
      <CatComponent />
      <TodoList />
      <button onClick={handleClick}>送信する</button>
      <Counter />
      <UserInfoApp />
    </div>
  );
}

export default App;

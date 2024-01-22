import React from 'react';

export default function TodoList() {
  const todos = [
    { text: "Reactのドキュメントを読む", completed: false },
    { text: "Reactの練習問題を解く", completed: true },
    { text: "新しいReactプロジェクトを始める", completed: false },
    { text: "ステート管理について学ぶ", completed: false },
    { text: "Reactフックの利用法を理解する", completed: true },
    { text: "Reactルーティングを実装する", completed: false },
    { text: "コンポーネント設計のベストプラクティスを調査する", completed: false },
    { text: "Reactテストライブラリでテストを書く", completed: false }
  ];

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text} {todo.completed && "✓"}
          </li>
        ))}
      </ul>
    </div>
  );
}

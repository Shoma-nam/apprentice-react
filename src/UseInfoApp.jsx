import { useState } from 'react';

export default function UserInfoApp() {
  const [userInfo, setUserInfo] = useState({ name: '大介', age: 25 });
  const [hobbies, setHobbies] = useState(['読書', '映画鑑賞']);

  function updateName() {
    // 正しい更新方法
    setUserInfo({ ...userInfo, name: '太一' });
  }

  function addHobby() {
    // 正しい更新方法
    setHobbies([...hobbies, '新しい趣味']);
  }

  return (
    <div>
      <div>
        <h2>ユーザー情報アプリ</h2>
        <p>名前: {userInfo.name}</p>
        <p>年齢: {userInfo.age}</p>
        <button onClick={updateName}>名前を太一に変更</button>
      </div>
      <div>
        <h3>趣味</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <button onClick={addHobby}>趣味を追加</button>
      </div>
    </div>
  );
}

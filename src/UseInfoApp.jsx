import { useState } from 'react';

export default function UserInfoApp() {
  const [userInfo, setUserInfo] = useState({ name: '大介', age: 25 });

  function updateName() {
    // 新しいオブジェクトを作成し、状態を更新
    setUserInfo({ ...userInfo, name: '太一' });
  }

  return (
    <div>
      <h2>ユーザー情報アプリ</h2>
      <p>名前: {userInfo.name}</p>
      <p>年齢: {userInfo.age}</p>
      <button onClick={updateName}>名前を太一に変更</button>
    </div>
  );
}

import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <p>独立更新的计数器</p>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      点了 {count} 次
    </button>
  );
}

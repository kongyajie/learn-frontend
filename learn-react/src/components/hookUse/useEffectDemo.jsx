
import { useState, useEffect } from 'react';
function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    let intervalId = setInterval(() => {
      console.log('setInterval');
      setCount(count + 1);
    }, 1000);

    return () => {
      console.log('clearInterval');
      clearInterval(intervalId);
    }
  }, [count]);

  return (
    <>
      <p>点击次数：{count}</p>
      <button onClick={handleClick}>+1</button>
    </>
  )
}

export default UseEffectDemo;
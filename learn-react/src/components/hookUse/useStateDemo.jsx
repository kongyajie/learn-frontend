import { useState } from 'react';

function UseStateDemo() {
  const [count, setCount] = useState(0)
  const [name, updateName] = useState('Aaron')

  const handleClick = () => {
    setCount(count + 1)
    updateName(name + '!')
  }
  return (
    <>
      <p>点击次数：{count}</p>
      <button onClick={handleClick}>+1</button>
      <p>{name}</p>
    </>
  )
}

export default UseStateDemo
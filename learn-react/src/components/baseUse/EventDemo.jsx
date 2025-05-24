// import React from 'react'

// export default class EventDemo extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }

//   handleClick1() {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   handleClick2 = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   handleClick3(event) {
//     event.preventDefault(); // 阻止默认行为
//     event.stopPropagation(); // 阻止冒泡
//     console.info('target', event.target); // 指向当前元素，即当前元素触发
//     console.info('currentTarget', event.currentTarget); // 指向当前元素，假象！！！

//     // 注意，event 其实是 React 封装的。可以看 __proto__.constructor 是 SyntheticEvent 组合事件
//     console.info('event', event); // 不是原生的 Event ，原生的 MouseEvent
//     console.info('event.__propto__.constructor', event.__proto__.constructor);

//     // 原生 event 如下。其 __proto__.constructor 是 MouseEvent
//     console.info('nativeEvent', event.nativeEvent);
//     console.info('nativeEvent target', event.nativeEvent.target); // 指向当前元素，即当前元素触发
//     console.info('nativeEvent currentTarget', event.nativeEvent.currentTarget); // 指向 root ！！！

//     // 1. event 是 SyntheticEvent ，模拟出来 DOM 事件所有能力
//     // 2. event.nativeEvent 是原生事件对象
//     // 3. 所有的事件，都被挂载到 root 上
//     // 4. 和 DOM 事件不一样，和 Vue 事件也不一样
//   }

//   render() {
//     return (
//       <>
//         {/* 未绑定 this，handleClick1 内的 this 为 undefined */}
//         {/* <button onClick={this.handleClick1}>点击了{this.state.count || 0} 次</button> */}

//         {/* 绑定 this 后，this 指向正常 */}
//         {/* <button onClick={this.handleClick1.bind(this)}>点击了{this.state.count || 0} 次</button> */}

//         {/* 或使用静态方法，this 指向当前实例 */}
//         {/* <button onClick={this.handleClick2}>点击了{this.state.count || 0} 次</button> */}

//         {/* SyntheticEvent vs NativeEvent */}
//         <a href="https://imooc.com/" onClick={this.handleClick3}>Click me</a>
//       </>
//     )
//   }
// }

import { useState } from "react"

export default function EventDemo() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleClick3 = (event) => {
    event.preventDefault() // 阻止默认行为
    event.stopPropagation() // 阻止冒泡
    console.log('target', event.target) // 指向当前元素，即当前元素触发
    console.log('current target', event.currentTarget) // 指向当前元素，假象！！！

    // 注意，event 其实是 React 封装的。可以看 __proto__.constructor 是 SyntheticEvent 组合事件
    console.log('event', event) // 不是原生的 Event ，原生的 MouseEvent
    console.log('event.__proto__.constructor', event.__proto__.constructor)

    // 原生 event 如下。其 __proto__.constructor 是 MouseEvent
    console.log('nativeEvent', event.nativeEvent)
    console.log('nativeEvent target', event.nativeEvent.target)  // 指向当前元素，即当前元素触发
    console.log('nativeEvent current target', event.nativeEvent.currentTarget) // 指向 document ！！！

    // 1. event 是 SyntheticEvent ，模拟出来 DOM 事件所有能力
    // 2. event.nativeEvent 是原生事件对象
    // 3. 所有的事件，都被挂载到 root 上
    // 4. 和 DOM 事件不一样，和 Vue 事件也不一样
  };

  return (
    <>
    <button onClick={handleClick}>点了{count}次</button>

    <a href="https://imooc.com/" onClick={handleClick3}>Click me</a>
    </>
  )
}
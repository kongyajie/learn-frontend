// import React, { useState } from 'react';

// export default class HOCDemo extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>使用高阶组件前</h1>
//         <App1 />
//         <App2 />
//       </div>
//     );
//   }
// }

// function App1() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const handleMouseMove = (e) => {
//     console.log(e.clientX, e.clientY);
//     setPosition({
//       x: e.clientX,
//       y: e.clientY
//     })
//   }
//   return (
//     <div style={{height: '200px'}} onMouseMove={handleMouseMove}>
//       <h1>The mouse position is ({position.x},{position.y})  </h1>
//     </div>
//   )
// }

// function App2() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const handleMouseMove = (e) => {
//     console.log(e.clientX, e.clientY);
//     setPosition({
//       x: e.clientX,
//       y: e.clientY
//     })
//   }
//   return (
//     <div style={{height: '200px'}} onMouseMove={handleMouseMove}>
//       <h1>The mouse position2 is ({position.x},{position.y})  </h1>
//     </div>
//   )
// }

// 使用 HOC 高阶组件
import React from 'react'

// 高阶组件
const withMouse = (Component) => {
    class withMouseComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = { x: 0, y: 0 }
        }
  
        handleMouseMove = (event) => {
            this.setState({
                x: event.clientX,
                y: event.clientY
            })
        }
  
        render() {
            return (
                <div style={{ height: '200px' }} onMouseMove={this.handleMouseMove}>
                    {/* 1. 透传所有 props 2. 增加 mouse 属性 */}
                    <Component {...this.props} mouse={this.state}/>
                </div>
            )
        }
    }
    return withMouseComponent
}

const App = (props) => {
    const a = props.a
    const { x, y } = props.mouse // 接收 mouse 属性
    return (
        <div style={{ height: '200px' }}>
            <h1>The mouse position is ({x}, {y})</h1>
            <p>{a}</p>
        </div>
    )
}

export default withMouse(App) // 返回高阶函数


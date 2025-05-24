// import React from 'react';
// import { createPortal } from 'react-dom';

// export default class PortalsDemo extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Portals</h1>
//         <p>组件内渲染</p>
//         {createPortal(
//           <div className="modal">{this.props.children}</div>,
//           document.body
//         )}
//       </div>
//     )
//   }
// }

import { createPortal } from 'react-dom'

export default function PortalsDemo(props) {
  return (
    <div>
      <h1>Portals</h1>
      <p>组件内渲染</p>
      {createPortal(
        <div className="modal">{props.children}</div>,
        document.body
      )}
    </div>
  )
}
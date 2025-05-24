// import React from "react";

// export default class UncontrolledDemo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "九二",
//       flag: true
//     };

//     this.nameInputRef = React.createRef();
//     this.flagCheckboxRef = React.createRef();
//     this.fileInputRef = React.createRef();
//   }

//   alertName = () => {
//     // const elem = this.nameInputRef.current;
//     // alert(elem.value);

//     const elem = this.flagCheckboxRef.current;
//     alert(elem.checked);
//   }

//   alertFile = () => {
//     const elem = this.fileInputRef.current;
//     alert(elem?.files[0]?.name);
//   }

//   render() {
//     {/* input defaultValue */}
//     // return (
//     //   <div>
//     //     {/* 使用 defaultValue 而不是 value ，使用 ref */}
//     //     <input type="text" defaultValue={this.state.name} ref={this.nameInputRef}/>
//     //     {/* state 并不会随着改变 */}
//     //     <p>{this.state.name}</p>
//     //     <button onClick={this.alertName}>alert name</button>
//     //   </div>
//     // );

//     {/* checkbox defaultChecked */}
//     // return (
//     //   <div>
//     //     <input type="checkbox" defaultChecked={this.state.flag} ref={this.flagCheckboxRef}/>
//     //     <p>{this.state.flag.toString()}</p>
//     //     <button onClick={this.alertName}>alert name</button>
//     //   </div>
//     // )

//     // file
//     return (
//       <div>
//         <input type="file" ref={this.fileInputRef}/>
//         <button onClick={this.alertFile}>alert file</button>
//       </div>
//     )
//   }
// }

import { useState, useRef } from "react";

export default function UncontrolledDemo () {

  const [user, setUser] = useState({
    name: "九二",
    flag: true
  });

  const nameInputRef = useRef();
  const flagCheckboxRef = useRef();
  const fileInputRef = useRef();

  const alertName = () => {
    // const elem = nameInputRef.current;
    // alert(elem.value);

    const elem = flagCheckboxRef.current;
    alert(elem.checked);
  }

  const alertFile = () => {
    const elem = fileInputRef.current;
    alert(elem?.files[0]?.name);
  }

  return (
    // <div>
    //   {/* input defaultValue */}
    //   {/* 使用 defaultValue 而不是 value ，使用 ref */}
    //   <input type="text" defaultValue={user.name} ref={nameInputRef}/>
    //   {/* state 并不会随着改变 */}
    //   <p>{user.name}</p>
    //   <button onClick={alertName}>alert name</button>
    // </div>

    // <div>
    //   {/* checkbox defaultChecked */}
    //   <input type="checkbox" defaultChecked={user.flag} ref={flagCheckboxRef}/>
    //   <p>{user.flag.toString()}</p>
    //   <button onClick={alertName}>alert name</button>
    // </div>

      <div>
        {/* file */}
        <input type="file" ref={fileInputRef}/>
        <button onClick={alertFile}>alert file</button>
      </div>
  )
}
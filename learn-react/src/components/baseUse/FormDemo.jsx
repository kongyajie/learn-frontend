// import React from 'react';

// export default class FormDemo extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       name: '九二',
//       city: '上海',
//       flag: true,
//       gender: 'male',
//     }
//   }

//   handleNameChange = (e) => {
//     console.log(e.target.value);
//     this.setState({
//       name: e.target.value,
//     })
//   }

//   handleCityChange = (e) => {
//     console.log(e.target.value);
//     this.setState({
//       city: e.target.value,
//     })
//   }

//   handleCheckChange = (e) => {
//     console.log(e.target.checked);
//     this.setState({
//       flag: e.target.checked,
//     })
//   }

//   handleRadioChange = (e) => {
//     console.log(e.target.value);
//     this.setState({
//       gender: e.target.value,
//     })
//   }

//   render() {
//     return (
//       <>
//         <h1>表单</h1>
//         <form>
//           {/* ============= 受控组件 ============== */}
//           {/* input */}
//           <div>
//             <label htmlFor="name">用户名</label>
//             <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleNameChange}/>
//             <p>{this.state.name}</p>
//           </div>

//           {/* select */}
//           <div>
//             <select value={this.state.city} onChange={this.handleCityChange}>
//               <option value="上海">上海</option>
//               <option value="北京">北京</option>
//               <option value="广州">广州</option>
//               <option value="深圳">深圳</option>
//               <option value="杭州">杭州</option>
//             </select>
//             <p>{this.state.city}</p>
//           </div>

//           {/* checkbox */}
//           <div>
//             <input type="checkbox" checked={this.state.flag} onChange={this.handleCheckChange}/>
//             <p>{this.state.flag.toString()}</p>
//           </div>

//           {/* radio */}
//           <div>
//             male<input type="radio" name='gender' value="male" checked={this.state.gender === 'male'} onChange={this.handleRadioChange}/>
//             female<input type="radio" name='gender' value="female" checked={this.state.gender === 'female'} onChange={this.handleRadioChange}/>
//             <p>{this.state.gender}</p>
//           </div>

//         </form>
//       </>
//     )
//   }
// }

import { useState } from 'react';

export default function FormDemo() {
  const [user, setUser] = useState({
    name: '九二',
    city: '上海',
    flag: true,
    gender: 'male',
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  }

  const handleSelectChange = (e) => {
    setUser({
      ...user,
      city: e.target.value,
    });
  }

  const handleCheckChange = (e) => {
    setUser({
      ...user,
      flag: e.target.checked,
    });
  }

  const handleRadioChange = (e) => {
    setUser({
      ...user,
      gender: e.target.value,
    });
  };

  return (
    <>
      <h1>表单</h1>
      <form>
        {/* ============= 受控组件 ============== */}
        {/* input */}
        <div>
          <label htmlFor="name">用户名</label>
          <input type="text" id="name" name="name" value={user.name} onChange={handleInputChange}/>
          <p>{user.name}</p>
        </div>

        {/* select */}
        <div>
          <select value={user.city} onChange={handleSelectChange}>
            <option value="上海">上海</option>
            <option value="北京">北京</option>
            <option value="广州">广州</option>
            <option value="深圳">深圳</option>
            <option value="杭州">杭州</option>
          </select>
          <p>{user.city}</p>
        </div>

        {/* checkbox */}
        <div>
          <input type="checkbox" checked={user.flag} onChange={handleCheckChange}/>
          <p>{user.flag.toString()}</p>
        </div>

        {/* radio */}
        <div>
          male<input type="radio" name="gender" value="male" onChange={handleRadioChange}/>
          female<input type="radio" name="gender" value="female" onChange={handleRadioChange}/>

          <p>{user.gender}</p>
        </div>
      </form>
    </>
  )
}
// import React from 'react';

// export default class PureComponentDemo extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <TodoListDemo />
//     )
//   }
// }

// class Input extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//     }
//   }

//   handleInputChange = (e) => {
//     console.info('e', e);
//     this.setState({
//       title: e.target.value
//     })
//   }

//   handleSubmit = () => {
//     const { onSubmit } = this.props;
//     onSubmit(this.state.title);

//     this.setState({
//       title: ''
//     })
//   }


//   render() {
//     return (
//       <>
//         <input type="text" value={this.state.title} onChange={this.handleInputChange} />
//         <button onClick={this.handleSubmit}>添加</button>
//       </>
//     )
//   }
// }

// class List extends React.PureComponent {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <ul>
//         {this.props.list.map((item) => (
//           <li key={item.id}>
//             {item.name}
//           </li>
//         ))}
//       </ul>
//     )
//   }
// }


// class TodoListDemo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [
//         { id: 1, name: 'todo1' },
//         { id: 2, name: 'todo2' },
//         { id: 3, name: 'todo3' },
//       ]
//     }
//   }

//   handleSubmit = (title) => {
//     const { list } = this.state;
//     const newList = [...list, { id: `id-${Date.now()}`, name: title }];
//     this.setState({
//       list: newList
//     })

//     // 演示 SCU，故意写的错误用法
//     // this.state.list.push({ id: `id-${Date.now()}`, name: title });
//     // this.setState({
//     //   list: this.state.list
//     // })
//   }

//   render() {
//     return (
//       <>
//         <Input onSubmit={this.handleSubmit} />
//         <List list={this.state.list}/>
//       </>
//     )
//   }
// }

import { useState, memo } from 'react';

export default function PureComponentDemo() {
  return (
    <div>
      <h1>PureComponentDemo</h1>
      <TodoListDemo />
    </div>
  )
}

function Input(props) {
  const [title, setTitle] = useState('');
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  }
  const handleSubmit = () => {
    if (title !== '' && props.onSubmit) {
      props.onSubmit(title);
      setTitle('');
    }
    
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }
  
  return (
    <>
      <input type="text" value={title} onChange={handleInputChange} onKeyDown={handleKeyDown} />
      <button onClick={handleSubmit}>提交</button>
    </>
  )
}

const MemoList = memo(function List(props) {
  return (
    <>
      <ul>
        {props.list.map(item => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  )
})

function TodoListDemo() {
  const [data, setData] = useState({
    list: [
      { id: 1, name: 'todo1' },
      { id: 2, name: 'todo2' },
      { id: 3, name: 'todo3' },
    ] 
  })
  const handleSubmit = (title) => {
    const newList = [...data.list, { id: `id-${Date.now()}`, name: title }];
    setData({
      list: newList
    })

    // 演示 SCU，故意写的错误用法
    // data.list.push({ id: `id-${Date.now()}`, name: title });
    // setData({
    //   list: data.list
    // })
  }
  return (
    <>
      <Input onSubmit={handleSubmit}/>
      <MemoList list={data.list}/>
    </>
  )
}

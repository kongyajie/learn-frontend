import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="请输入待办事项" value={this.state.title} onChange={this.onTitleChange}/>
        <button onClick={this.onsubmit}>提交</button>
      </div>
    )
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  onsubmit = () => {
    const { submitTitle } = this.props;
    submitTitle(this.state.title);

    this.setState({
      title: ''
    });
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.list.map(item => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    )
  }
} 

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
        {this.props.text}
        {this.props.length}
      </p>
    )
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 1,
          title: '吃饭',
          completed: false
        },
        {
          id: 2,
          title: '睡觉',
          completed: true
        },
        {
          id: 3,
          title: '打豆豆',
          completed: false
        }
      ],
      footerInfo: '总数：'
    }
  }

  render () {
    return (
      <div>
        <h1>TodoList</h1>
        <Input submitTitle={this.onSubmitTitle}/>
        <List list={this.state.list} />
        <Footer text={this.state.footerInfo} length={this.state.list.length}></Footer>
      </div>
    )
  }

  onSubmitTitle = (title) => {
    this.setState({
      list: this.state.list.concat({
        id: `id-${Date.now()}`,
        title
      })
    })
  }
}

export default class PropsDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TodoList></TodoList>
      </div>
    )
  }
}
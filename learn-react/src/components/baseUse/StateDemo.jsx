import React from 'react';

export default class StateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    // 1、不要直接修改 state，使用不可变值
    // this.state.count ++;

    // this.setState({
    //   count: this.state.count + 1,
    // });


    // 2、回调中的 setState 是异步的
    // this.setState({
    //   count: this.state.count + 1,
    // }, () => {
    //   // 2、setState 是异步的
    //   console.info('count by callback', this.state.count);
    // })

    // console.info('count', this.state.count);

    // 3、setTimeout 中 setState 是异步的（react17前是同步）
    // setTimeout(() => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    //   console.info('count by setTimeout', this.state.count);
    // }, 0);

    // 4、自定义dom事件中 setState 是异步的

    // 5、批量更新，会被合并，执行结果只一次 +1
    // this.setState({
    //   count: this.state.count + 1,
    // }, () => {
    //   console.info('count by batch1', this.state.count);
    // });
    // this.setState({
    //   count: this.state.count + 1,
    // }, () => {
    //   console.info('count by batch2', this.state.count);
    // });
    // this.setState({
    //   count: this.state.count + 1,
    // }, () => {
    //   console.info('count by batch3', this.state.count);
    // });
    // console.info('count by batch', this.state.count);

    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
    console.info('count by function batch', this.state.count);
  };

  // handleBodyClick = (e) => {
  //   e.stopPropagation();
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  //   console.info('count by event', this.state.count);
  // };

  // componentDidMount() {
  //   document.body.addEventListener('click', this.handleBodyClick)
  // }

  // componentWillUnmount() {
  //   document.body.removeEventListener('click', this.handleClick);
  // }

  render() {
    return (
      <div>
        <h1>State Demo</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
import React from 'react';

export default class SCUDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <h1>SCUDemo</h1>
        <p>name: {this.state.name}</p>
        <p>count: {this.state.count}</p>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}
import React from 'react';

// 核心API：
// 1、创建：createContext
// 2、提供：ThemeContext.Provider
// 3、消费：ThemeContext.Consumer，函数组件只能用这种，class组件可以用 contextType
// 

// 创建 Context 填入默认值（任何一个 js 变量）
const ThemeContext = React.createContext('light');

// 底层组件-函数式组件
function ThemedLink() {
  // const theme = this.context // 会报错。函数式组件没有实例，即没有 this
  return (

    // 函数式组件可以使用 Consumer
    <ThemeContext.Consumer>
      { value => (
        <div>
          <p>link's theme is {value}</p>
        </div>
      )}
    </ThemeContext.Consumer>
  )
} 

// 底层组件-class组件（两种方式否可以）
class ThemedButton extends React.Component {
  render() {
    const theme = this.context; // React 会往上找到最近的 theme Provider，然后使用它的值。
    return (
      <div>
        <p>button's theme is {theme}</p>
      </div>
    )

    // return (
    //   <ThemeContext.Consumer>
    //     {value => (
    //       <p>button's theme is {value}</p>
    //     )}
    //   </ThemeContext.Consumer>
    // )
  }
}

ThemedButton.contextType = ThemeContext;


// 中间的组件再也不必指明往下传递 theme 了。
function ToolBar() {
  return (
    <>
      <ThemedButton />
      <ThemedLink />
    </>
  )
}

export default class ContextDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ToolBar />
        <hr />
        <button onClick={this.changeTheme}>change theme</button>
      </ThemeContext.Provider>
    )
  }

  changeTheme = () => {
    this.setState({
      theme: this.state.theme === 'light' ? 'dark' : 'light'
    });
  }
}
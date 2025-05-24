import { Fragment } from "react";

function Item({ content, finished }) {
  return (
    <div>
      <span>{content}&nbsp;&nbsp;</span>
      {finished ? <span>✅</span> : <span>❌</span>}
    </div>
  );
}

function List({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} content={item.content} finished={item.finished} />
      ))}
    </div>
  );
}

export default function JSXBase() {
  // const rawHtml = '<span>富文本内容<i>斜体</i><b>加粗</b></span>'
  // const rawHtmlData = {
  //   __html: rawHtml // 注意，必须是这种格式
  // }

  const items = [
    { id: 1, content: "任务1", finished: true },
    { id: 2, content: "任务2", finished: false },
    { id: 3, content: "任务3", finished: true },
  ];
  
  return (
    <Fragment>
      {/* 一、JSX书写标签语言 */}
      {/* 1. 只可以返回一个元素，可用Fragment包裹 */}
      {/* 2. 自闭合标签必须闭合 */}
      {/* 3. 使用驼峰式命名法给大部分属性命名 */}
      {/* <br/>
      <p className="xx" style={{backgroundColor: 'red'}}>123</p> */}

      {/* 二、在JSX中通过大括号使用JavaScript */}
      {/* 1. JSX引号-字符串传递 */}
      {/* 2. JSX大括号-JavaScript逻辑和变量 */}
      {/* 3. JSX双大括号-CSS和对象 */}
      {/* <p>Hello React!</p>
      <p>{1 + 2}</p>
      <p className="xx" style={{ fontSize: '30px', backgroundColor: 'red' }}>123</p> */}

      {/* 原生 html */}
      {/* <p dangerouslySetInnerHTML={rawHtmlData}></p>
      <p>{rawHtml}</p> */}

      {/* 三、条件渲染 */}
      {/* 1. if-else语句 复杂逻辑 */}
      <List items={items}/>
      {/* 2. 三元运算符 */}
      {/* { items.length > 0 ? <List items={items}/> : <p>没有数据</p> } */}
      {/* 3. &&运算符 */}
      {/* { items.length > 0 && <List items={items}/> } */}

      {/* 四、列表渲染 */}
      {/* 1. map()方法 */}
      {/* {items.map((item) => (
        <Item key={item.id} content={item.content} finished={item.finished} />
      ))} */}

      {/* 2. filter()方法 */}
      {/* {items.filter((item) => item.finished).map((item) => (
        <Item key={item.id} content={item.content} finished={item.finished} />
      ))} */}

    </Fragment>
  )
}
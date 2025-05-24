import { Fragment, useState } from "react";
import Demo from "./components/demo";
import Base from "./components/baseUse";
import Advanced from "./components/advancedUse";
import Hooks from "./components/hookUse";
import "./App.less";

function App() {
  const [selectTab, setSelectTab] = useState(4);
  return (
    <div className="app">
      <header className="header">
        <nav onClick={() => setSelectTab(1)}>Base</nav>
        <nav onClick={() => setSelectTab(2)}>Advanced</nav>
        <nav onClick={() => setSelectTab(3)}>Demo</nav>
        <nav onClick={() => setSelectTab(4)}>Hooks</nav>
      </header>
      <section className="content">
        { selectTab === 1 && <Base /> }
        { selectTab === 2 && <Advanced /> }
        { selectTab === 3 && <Demo /> }
        { selectTab === 4 && <Hooks /> }
      </section>
    </div>
  );
}

export default App;

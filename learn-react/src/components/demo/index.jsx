import Game from "./Game";
import Counter from "./Counter";
import SharedCounter from "./SharedCounter";
import Product from "./Product";
import "./Demo.less";

export default function Demo() {
  return (
    <div className="demo">
      <section>
        <h1>井字棋</h1>
        <Game></Game>
      </section>

      <section>
        <h1>计数器</h1>
        <Counter></Counter>
      </section>

      <section>
        <h1>共享计数器</h1>
        <SharedCounter></SharedCounter>
      </section>

      <section>
        <h1>商品查询</h1>
        <Product></Product>
      </section>
    </div>
  )
}
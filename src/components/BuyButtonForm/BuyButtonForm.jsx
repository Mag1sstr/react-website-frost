import { useState } from "react";
import "./BuyButtonForm.css";

export default function BuyButtonForm(props) {
  let [count, setCount] = useState(1);
  return (
    <div
      onClick={() => {
        props.setClickBuyBtn(false);
        setCount(1);
      }}
      className={`addBasket__modal ${props.style}`}
    >
      <div onClick={(e) => e.stopPropagation()} className="addBasket">
        <p className="addBasket__title">Товар добавлен в корзину</p>
        <p className="addBasket__text">{props.clickCardText}</p>

        <div className="addBasket__block">
          <p className="addBasket__block-text">Укажите количество:</p>
          <div className="addBasket__count-block">
            <button
              onClick={() => {
                count <= 1 ? null : setCount((count -= 1));
              }}
              className="addBasket__block-btn"
            >
              -
            </button>
            <p className="addBasket__block-count">{count}</p>
            <button
              onClick={() => setCount((count += 1))}
              className="addBasket__block-btn"
            >
              +
            </button>
          </div>
        </div>

        <div className="addBasket__column">
          <button className="addBasket__column-btn">Оформить заказ</button>
          <button className="addBasket__column-btn addBasket__column-btn-continue">
            Продолжить выбор товаров
          </button>
        </div>
      </div>
    </div>
  );
}

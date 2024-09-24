import "./Basket.css";
import { useState } from "react";
import NoProductPage from "../NoProductPage/NoProductPage";

export default function Basket(props) {
  const [basketPageData, setBasketPageData] = useState([
    {
      id: 1,
      title:
        "Компрессор кондиционера Hyundai Tucson, Kia Sportage 97701-2E300FD; 0935-03se;",
      price: 95999,
      count: 1,
    },
    {
      id: 2,
      title:
        "Компрессор кондиционера Hyundai Elantra, Kia Sportage 97701-2E300FD; 0935-03se;",
      price: 89000,
      count: 1,
    },
  ]);
  let sumPrice = 0;
  basketPageData.forEach((el) => {
    sumPrice += el.price;
  });
  let [sum, setSum] = useState(sumPrice);

  if (basketPageData.length == 0) {
    return <NoProductPage />;
  }
  return (
    <>
      <div style={{ marginBottom: "30px" }} className="conteiner">
        <div className="basket__inner">
          <h3 className="basket__title">Корзина</h3>
          <div className="basket__sec">
            <div className="names__box">
              <div className="names">
                <p className="names__title">Наименование товара</p>
                {/* <p className="names__text">
                  Компрессор кондиционера Hyundai Tucson, Kia Sportage
                  97701-2E300FD; 0935-03se; Kia Sportage 97701-2E300FD; 0935-02
                </p> */}
              </div>
              <div className="prices">
                <div className="kol">
                  <p className="names__title">Количество</p>
                  {/* <p className="kol__numbers">- 1 +</p> */}
                </div>
                <div className="kol">
                  <p className="names__title">Цена</p>
                  {/* <p className="kol__numbers">110 999 тг</p> */}
                </div>
              </div>
            </div>
            {/* <div className="delete">
              <p className="delete__text">Артикул: AC97701</p>
              <a href="#" className="delete__link">Удалить из корзины</a>
            </div> */}
            {/* <div className="adaptive__sel">
              <div className="sel__n">
                <p>-</p>
                <button className="adaptive__sel-btn">1</button>
                <p>+</p>
              </div>
              <div className="sel__p">
                <p>110 999 тг</p>
              </div>
            </div> */}
            {/* <a href="#" className="adap__link">Удалить из корзины</a> */}
          </div>
          {basketPageData.map((el, index) => {
            return (
              <div key={el.id} className="basket__sec">
                <div className="names__box">
                  <div className="names">
                    <p className="names__text">{el.title}</p>
                  </div>
                  <div className="prices">
                    <div className="kol">
                      <button
                        onClick={() => {
                          let minusCount = [...basketPageData];
                          if (minusCount[index].count <= 1) {
                            null;
                          } else {
                            minusCount[index].count -= 1;
                          }
                          setBasketPageData(minusCount);
                          setSum(el.count <= 1 ? sumPrice : (sum -= el.price));
                        }}
                        className="kol__buttons"
                      >
                        -
                      </button>
                      <p className="kol__numbers">{el.count}</p>
                      <button
                        onClick={() => {
                          let plusCount = [...basketPageData];
                          plusCount[index].count += 1;
                          setBasketPageData(plusCount);
                          setSum((sum += el.price));
                        }}
                        className="kol__buttons"
                      >
                        +
                      </button>
                    </div>
                    <div className="kol">
                      <p className="kol__numbers">{el.price * el.count} тг</p>
                    </div>
                  </div>
                </div>
                <div className="delete">
                  <p className="delete__text">Артикул: AC97701</p>
                  <button
                    onClick={() => {
                      let copyData = [...basketPageData];
                      let filteredData = copyData.filter(
                        (item) => item.id !== el.id
                      );
                      setBasketPageData(filteredData);

                      setSum((sum -= el.price * el.count));
                    }}
                    href="#!"
                    className="delete__link"
                  >
                    Удалить из корзины
                  </button>
                </div>
              </div>
            );
          })}
          <div className="payment">
            <div className="payment__select">
              <p className="payment__text">Способ оплаты</p>
              <select className="payment__sel">
                <option>Оплата при получении</option>
              </select>
            </div>
            <div className="payment__price">
              <p>Итого к оплате:</p>
              <p>{sum} тг</p>
            </div>
          </div>
        </div>
      </div>
      <div className="payment__button">
        <div className="conteiner">
          <div className="inner">
            <button
              onClick={() => {
                props.setMainStage(1);
                props.setCurrentStage(2);
              }}
              className="payment__btn"
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

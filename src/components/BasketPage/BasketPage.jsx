import { useContext, useState } from "react";
import "./BasketPage.css";
import NoProductPage from "../NoProductPage/NoProductPage";
import ContactInformationPage from "../ContactInformationPage/ContactInformationPage";
import DeliveryPage from "../DeliveryPage/DeliveryPage";
import CompletionPage from "../CompletionPage/CompletionPage";
import Basket from "../Basket/Basket";
import axios from "axios";
import { AuthContext } from "../../contexts/Auth/AuthContextProvider";

export default function BasketPage() {
  let [mainStage, setMainStage] = useState(0);
  let [currentStage, setCurrentStage] = useState(1);

  let [inputValue, setInputValue] = useState({
    name: "",
    surname: "",
    patronymic: "",
    tel: "",
    email: "",
  });
  let [inputDeliveryValue, setInputDeliveryValue] = useState({
    region: "",
    city: "",
    street: "",
    house: "",
    apartment: "",
  });
  // const newOrder = useContext(AuthContext);

  const stagesArray = [
    {
      name: "Корзина",
      component: (
        <Basket setMainStage={setMainStage} setCurrentStage={setCurrentStage} />
      ),
    },
    {
      name: "Контактные данные",
      component: (
        <ContactInformationPage
          setMainStage={setMainStage}
          setCurrentStage={setCurrentStage}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
      ),
    },
    {
      name: "Доставка",
      component: (
        <DeliveryPage
          setMainStage={setMainStage}
          setCurrentStage={setCurrentStage}
          setInputDeliveryValue={setInputDeliveryValue}
          inputDeliveryValue={inputDeliveryValue}
          tel={inputValue.tel}
          area={inputDeliveryValue.region}
          city={inputDeliveryValue.city}
          street={inputDeliveryValue.street}
          house={inputDeliveryValue.house}
          apartment={inputDeliveryValue.apartment}
        />
      ),
    },
    {
      name: "Завершение",
      component: <CompletionPage />,
    },
  ];
  // console.log(mainStage);

  return (
    <>
      <section className="order">
        <div className="conteiner">
          <div className="order__inner">
            <h2 className="order__title">Оформление заказа</h2>
            <div className="order__buttons">
              {stagesArray.map((el, index) => {
                return (
                  <div
                    key={el.name}
                    onClick={() => {
                      setMainStage(index < currentStage ? index : mainStage);
                    }}
                    className="order__link"
                    // href="#"
                  >
                    <div
                      className={
                        index == mainStage
                          ? "order__btn active__order"
                          : "order__btn"
                      }
                    >
                      {el.name}
                    </div>
                  </div>
                );
              })}

              {/* <a className="order__link" href="#">
                <div className="order__btn active__order">Корзина</div>
              </a>
              <a className="order__link" href="#">
                <div className="order__btn">Контактные данные</div>
              </a>
              <a className="order__link" href="#">
                <div className="order__btn">Доставка</div>
              </a>
              <a className="order__link" href="#">
                <div className="order__btn">Завершение</div>
              </a> */}
            </div>
          </div>
        </div>
      </section>
      {stagesArray.map((comp, i) => {
        return mainStage == i ? <div key={i}>{comp.component}</div> : null;
      })}
    </>
  );
}

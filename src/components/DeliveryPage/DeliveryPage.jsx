import "./DeliveryPage.css";

export default function DeliveryPage(props) {
  return (
    <>
      <div style={{ marginBottom: "30px" }} className="conteiner">
        <div className="deliverypage">
          <div className="deliverypage__inner">
            <p className="deliverypage__title">Доставка</p>
            <div className="deliverypage__row">
              <div className="deliverypage__block">
                <div className="deliverypage__input-block">
                  <p className="deliverypage__input-text">Область</p>
                  <input
                    type="text"
                    className="deliverypage__input"
                    placeholder="Акмолинская область"
                  />
                </div>
                <div className="deliverypage__input-block">
                  <p className="deliverypage__input-text">Город или поселок</p>
                  <input type="text" className="deliverypage__input" />
                </div>
              </div>
              <div className="deliverypage__line"></div>
              <div className="deliverypage__block">
                <div className="deliverypage__input-block">
                  <p className="deliverypage__input-text">Улица</p>
                  <input type="text" className="deliverypage__input" />
                </div>
                <div className="deliverypage__input-row">
                  <div className="deliverypage__input-block">
                    <p className="deliverypage__input-text">Дом</p>
                    <input type="text" className="deliverypage__input" />
                  </div>
                  <div className="deliverypage__input-block">
                    <p className="deliverypage__input-text">Квартира</p>
                    <input type="text" className="deliverypage__input" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment__button">
        <div className="conteiner">
          <div className="inner">
            <button
              onClick={() => {
                props.setMainStage(3);
                props.setCurrentStage(4);
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

import "./ContactInformationPage.css";

export default function ContactInformationPage(props) {
  return (
    <>
      <div style={{ marginBottom: "30px" }} className="conteiner">
        <div className="contactinfo">
          <div className="contactinfo__inner">
            <h1 className="contactinfo__title">Контактные данные</h1>
            <div className="contactinfo__row">
              <div className="contactinfo__block">
                <div className="contactinfo__input-block">
                  <p className="contactinfo__input-text">Фамилия</p>
                  <input className="contactinfo__input" type="text" />
                </div>
                <div className="contactinfo__input-block">
                  <p className="contactinfo__input-text">Имя</p>
                  <input className="contactinfo__input" type="text" />
                </div>
                <div className="contactinfo__input-block">
                  <p className="contactinfo__input-text">Отчество</p>
                  <input className="contactinfo__input" type="text" />
                </div>
                <div className="contactinfo__input-block">
                  <p className="contactinfo__input-text">Телефон</p>
                  <input
                    className="contactinfo__input"
                    type="tel"
                    placeholder="+7 (___) ___ __ __"
                  />
                </div>
              </div>
              <div className="contactinfo__line"></div>
              <div className="contactinfo__block">
                <div className="contactinfo__input-block">
                  <p className="contactinfo__input-text">E-mail</p>
                  <input className="contactinfo__input" type="text" />
                </div>
                <div className="contactinfo__input-block password__opacity">
                  <p className="contactinfo__input-text">Пароль</p>
                  <input className="contactinfo__input" type="text" />
                </div>
                <div className="contactinfo__input-block password__opacity">
                  <p className="contactinfo__input-text">Повторите пароль</p>
                  <input className="contactinfo__input" type="text" />
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
                props.setMainStage(2);
                props.setCurrentStage(3);
              }}
              className="payment__btn"
            >
              Подтвердить
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

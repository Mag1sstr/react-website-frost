import "./CompletionPage.css";
import check from "./../../images/check.svg";
export default function CompletionPage() {
  return (
    <div className="conteiner">
      <div className="comletionpage">
        <div className="comletionpage__inner">
          <h1 className="comletionpage__title">Заказ успешно создан</h1>
          <div className="comletionpage__row">
            <img src={check} alt="" />
            <p className="comletionpage__text">
              Заказ №100001 был создан. Вы можете просмотреть список всех ваших
              заказов в личном кабинете.
            </p>
            <button className="comletionpage__btn">
              Перейти в личный кабинет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

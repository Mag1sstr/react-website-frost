import "./RegisterForm.css";
export default function RegisterForm(props) {
  return (
    <div onClick={()=>{
      props.getClickRegModal(false)
    }} className={`register__modal ${props.style}`}>
      <div onClick={(e)=>e.stopPropagation()} className="register__form">
        <p className="register__form-title">Создание учётной записи</p>
        <div className="register__form-block">
          <div className="register__form-row">
            <input
              className="register__form-input"
              type="text"
              placeholder="Имя"
            />
            <input
              className="register__form-input"
              type="text"
              placeholder="Фамилия"
            />
          </div>
          <input
            type="text"
            className="register__form-input"
            placeholder="Адрес электронной почты"
          />
          <input
            type="text"
            className="register__form-input"
            placeholder="Пароль"
          />
          <input
            type="text"
            className="register__form-input"
            placeholder="Повторите пароль"
          />
        </div>
        <div className="register__form-btn-block">
          <button className="register__form-btn">Зарегистрироваться</button>
          <button className="register__form-btn login">
            Войти в существующую учётную запись
          </button>
        </div>
      </div>
    </div>
  );
}

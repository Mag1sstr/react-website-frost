import { useState } from "react";
import "./LoginForm.css";

export default function LoginForm(props) {
  // const [click ,setClick] = useState(true)
  // console.log(click);
  
  return (
    <div onClick={()=>{
      // setClick(!click)
      props.getClickLoginModal(false)
    }}  className={`login__modal ${props.style}`}>
      <div onClick={(e)=>e.stopPropagation()} className="login__form">
        <p className="login__form-title">Вход в учётную запись</p>
        <div className="login__form-block">
          <input
            className="login__form-input"
            type="text"
            placeholder="Адрес электронной почты"
          />
          <input
            className="login__form-input"
            type="text"
            placeholder="Пароль"
          />
          <div className="login__form-forgot">Забыли пароль?</div>
        </div>
        <div className="login__form-btn-block">
          <button className="login__form-btn">Войти</button>
          <button className="login__form-btn reg">
            Создать новую учётную запись
          </button>
        </div>
      </div>
    </div>
  );
}

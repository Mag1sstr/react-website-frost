import axios from "axios";
import "./RegisterForm.css";
import { useState } from "react";
export default function RegisterForm(props) {

  let [registerValue,setRegisterValue] = useState({
    first_name: '',
    last_name: '',
    email:'',
    password:'',
    repeat_password:'',
  })
  const [emailError, setEmailError] = useState('')
  const [passError, setPassError] = useState(false)
  const [error, setError] = useState(false)

  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  
  
  return (
    <div onClick={()=>{
      props.getClickRegModal(false)
    }} className={`register__modal ${props.style}`}>
      <div onClick={(e)=>e.stopPropagation()} className="register__form">
        <p className="register__form-title">Создание учётной записи</p>
        <div className="register__form-block">
          {error ?  <div style={{color:'red'}}>Заполните все поля</div> : null}
          <div className="register__form-row">
            <input
              value={registerValue.first_name}
              onChange={(e)=>{
                setRegisterValue({...registerValue, first_name:e.target.value})
              }}
              className="register__form-input"
              type="text"
              placeholder="Имя"
            />
            <input
              value={registerValue.last_name}
              onChange={(e)=>{
                setRegisterValue({...registerValue, last_name:e.target.value})
              }}
              className="register__form-input"
              type="text"
              placeholder="Фамилия"
            />
          </div>
          <div style={{color:'red'}}>{emailError}</div>
          <input
            value={registerValue.email}
            onChange={(e)=>{
              setRegisterValue({...registerValue, email:e.target.value})
              if (!re.test(String(e.target.value).toLowerCase())) {
                setEmailError("Некорректный email");
              } else {
                setEmailError("");
              }
            }}
            type="text"
            className="register__form-input"
            placeholder="Адрес электронной почты"
          />
          {passError ? <div style={{color:'red'}}>Повторите пароль</div> : null}
          <input
            value={registerValue.password}
            onChange={(e)=>{
              setRegisterValue({...registerValue, password:e.target.value})
            }}
            type="text"
            className="register__form-input"
            placeholder="Пароль"
          />
          <input
          value={registerValue.repeat_password}
          onChange={(e)=>{
            setRegisterValue({...registerValue, repeat_password:e.target.value})
          }}
            type="text"
            className="register__form-input"
            placeholder="Повторите пароль"
          />
        </div>
        <div className="register__form-btn-block">
          <button onClick={()=>{
            if(registerValue.password !== registerValue.repeat_password){
              return setPassError(!passError)
            }
            if(registerValue.first_name.length == 0 && registerValue.last_name.length == 0 && registerValue.email.length == 0 && registerValue.password.length == 0 && registerValue.repeat_password.length ==0){
               setError(!error)
            }else{
              axios.post('https://frost.runtime.kz/api/registration',{
                first_name: registerValue.first_name,
                last_name: registerValue.last_name,
                email: registerValue.email,
                password: registerValue.password,
              }).then((resp)=>{
                console.log(resp);
              }).catch((err)=>{
                let errors = err.response.data.errors
                setEmailError(errors.email)
              })
            }


          }} className="register__form-btn">Зарегистрироваться</button>
          <button className="register__form-btn login">
            Войти в существующую учётную запись
          </button>
        </div>
      </div>
    </div>
  );
}

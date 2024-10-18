import "./Header.css";
import logo from "../../images/logo.png";
import inputSearch from "../../images/input-search.svg";
import basket from "../../images/basket.svg";
import ellips from "../../images/ellips.svg";
import { NavLink } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import { useContext, useState } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import { AuthContext } from "../../contexts/Auth/AuthContextProvider";

export default function Header() {

  const user = useContext(AuthContext)
  // console.log(token.token);
  



  const [clickLoginModal,setClickLoginModal] = useState(false)
  const [clickRegModal,setClickRegModal] = useState(false)

  // console.log(clickModal);
  function getClickLoginModal(bool){
    setClickLoginModal(bool)
  }
  function getClickRegModal(bool){
    setClickRegModal(bool)
  }
  
  return (
    <header className="header">
      <div className="conteiner">
        <div className="header__top">
          <div className="header__logo">
            <NavLink to="/">
              <img className="main__logo" src={logo} alt="" />
            </NavLink>
          </div>
          <div className="adaptiv__icons">
            <img src="images/adaptive/person.png" alt="" />
            <img src="images/adaptive/search.png" alt="" />
            <img src="images/adaptive/basket.png" alt="" />
          </div>
          <div className="header__city">
            <p>г. Нур-Султан</p>
            <p>г. Алматы</p>
          </div>
          <div className="header__numbers">
            <p>+7 777 777 77 77</p>
            <p>+7 777 777 77 77</p>
          </div>
          <div className="header__input">
            <input
              type="text"
              placeholder="Поиск по каталогу ..."
              className="header__input-item"
            />
            <img src={inputSearch} alt="" className="header__input-img" />
          </div>
          {user.user == null ? (

            <div className="header__reg">
            <a onClick={()=>{
              setClickLoginModal(!clickLoginModal)
            }}  href="#">Вход в личный кабинет</a>
            <LoginForm style={clickLoginModal ? 'open' : null} getClickLoginModal={getClickLoginModal}/>
            <a onClick={()=>{
              setClickRegModal(!clickRegModal)
            }} href="#">Зарегистрироваться</a>
            <RegisterForm style={clickRegModal ? 'open' : null} getClickRegModal={getClickRegModal}/>
          </div>
          )
            : (
              <div className="header__reg">
                <button className="auth__user-btn">
                  {`${user.user.firstName} ${user.user.lastName}(${user.user.email})`}
                </button>
                <button onClick={()=>{
                  user.setUser(null)
                  user.setTokenInfo(null)
                  localStorage.setItem('token', null)
                }} className="auth__user-btn">
                  Выйти
                </button>
              </div>
            )

          }
          <NavLink to='/basket' className="header__basket">
            <img src={basket} alt="" />
            <img src={ellips} alt="" className="ellips" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

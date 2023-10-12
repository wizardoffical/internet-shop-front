import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../..";
import Navbar from "../../components/Navbar/Navbar";
import { login, registration } from "../../http/userApi";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../../utils/consts";
import "./Auth.css";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className="Auth">
      <Navbar />
      <div className="AuthWrapper">
        <div className="formWrapper">
          <div className="titleAuth">
            <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
          </div>
          <form className="authForm">
            <input
              className="authInput"
              type="text"
              placeholder="Введите email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="authInput"
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="noAccTtitle">
              {isLogin ? (
                <span>
                  Нет аккаунта?
                  <Link to={REGISTRATION_ROUTE}> Зарегистрируйтесь!</Link>
                </span>
              ) : (
                <span>
                  Есть аккаунт? <Link to={LOGIN_ROUTE}>Войдите!</Link>
                </span>
              )}
              <button className="authButton" onClick={click}>
                {isLogin ? "Войти" : "Регистрация"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Auth;

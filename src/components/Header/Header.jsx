import React, { useContext } from "react";
import "./Header.css";
import Logo from "../../assets/img/logo.png";
import { BsSearch, BsCart2 } from "react-icons/bs";
import { Context } from "../../index";
import {
  SHOP_ROUTE,
  BASKET_ROUTE,
  ADMIN_ROUTE,
  LOGIN_ROUTE,
} from "../../utils/consts";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Search from "../Search/Search";

const Header = observer(() => {
  const { user } = useContext(Context);

  if (user.isAuth) {
    localStorage.setItem("userRole", user.user.role);
  } else {
    localStorage.removeItem("userRole");
  }
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="Header">
      <Link to={SHOP_ROUTE}>
        <img src={Logo} alt="" />
      </Link>

      <Search />

      {user.isAuth ? (
        <div className="headerPanel">
          <button className="loginBtn" onClick={() => logOut()}>
            Выйти
          </button>
          {user.user.role === "ADMIN" && (
            <button
              className="adminButton"
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админка
            </button>
          )}

          <Link className="cartLink" to={BASKET_ROUTE}>
            <BsCart2 style={{ fontSize: "25px" }} />
          </Link>
          <div className="sum">
            <span>Сумма</span>
            <span>0 ₽</span>
          </div>
        </div>
      ) : (
        <div className="headerPanel">
          <button className="loginBtn" onClick={() => navigate(LOGIN_ROUTE)}>
            Войти
          </button>

          <Link className="cartLink" to={BASKET_ROUTE}>
            <BsCart2 style={{ fontSize: "25px" }} />
          </Link>
          <div className="sum">
            <span>Сумма</span>
            <span>0 ₽</span>
          </div>
        </div>
      )}
    </div>
  );
});

export default Header;

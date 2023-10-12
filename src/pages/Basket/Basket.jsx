import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Basket.css";
import { Context } from "../..";
import { getBasket, removeFromBasket } from "../../http/basketApi";
import { TiPlus, TiMinus } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../utils/consts";

const Basket = observer(() => {
  const { user, basket, device } = useContext(Context);
  const navigate = useNavigate();

  const userId = user?.user?.id;

  const handleRemoveFromBasket = async (deviceId) => {
    try {
      await removeFromBasket(user.user.id, deviceId);
      basket.setBasket(
        basket.baskets.filter((item) => item.deviceId !== deviceId)
      );
      alert("Товар удален из корзины!");
    } catch (error) {
      console.error(error);
      alert("Не удалось удалить товар из корзины.");
    }
  };

  const totalPrice = basket.baskets.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  const handleIncrementCount = (deviceId) => {
    const updatedBaskets = basket.baskets.map((item) => {
      if (item.deviceId === deviceId) {
        if (item.count < 10) {
          item.count += 1;
          basket.setBasket(updatedBaskets);
        }
      }
      return item;
    });
    basket.setBasket(updatedBaskets);
  };

  const handleDecrementCount = (deviceId) => {
    const updatedBaskets = basket.baskets.map((item) => {
      if (item.deviceId === deviceId) {
        if (item.count > 1) {
          item.count -= 1;
          basket.setBasket(updatedBaskets);
        }
      }
      return item;
    });
    basket.setBasket(updatedBaskets);
  };

  useEffect(() => {
    getBasket(userId).then((data) => {
      basket.setBasket(data.basket);
    });
  }, []);

  return (
    <div className="Basket">
      <Navbar />
      <div className="container">
        {basket.baskets.length >= 1 ? (
          <div className="basketPage">
            <div className="basketWrapper">
              {basket.baskets.map((item) => {
                return (
                  <div
                    className={`basketDeviceWrapper ${
                      item.name === "No name" ? "hiddenNoName" : ""
                    }`}
                    key={item.deviceId}
                  >
                    <img
                      className="basketImg"
                      src={process.env.REACT_APP_API_URL + item.img}
                      alt=""
                      onClick={() =>
                        navigate(DEVICE_ROUTE + "/" + item.deviceId)
                      }
                    />
                    <div className="basketInfo">
                      <span
                        style={{
                          fontWeight: "500",
                          fontSize: "18px",
                          width: "300px",
                        }}
                      >
                        {item.name}
                      </span>
                      <div className="basketCount">
                        <TiMinus
                          style={{
                            width: "14px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleDecrementCount(item.deviceId)}
                        />
                        <span className="basketCountValue">{item.count}</span>
                        <TiPlus
                          style={{
                            width: "14px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleIncrementCount(item.deviceId)}
                        />
                      </div>
                      <span className="basketPrice">{item.price} руб.</span>
                      <IoClose
                        style={{
                          fontSize: "25px",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                        onClick={() => handleRemoveFromBasket(item.deviceId)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="basketPayment">
              <div className="paymentTitle">
                <span className="basketTotalText">Корзина на сумму:</span>
                <span className="basketTotalValue">{totalPrice} руб.</span>
              </div>
              <div className="paymentBtn">
                <button className="paymentButton">
                  Перейти на страницу оплаты
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="emptyBasketWrapper">
            <h4 className="emptyBasketText">Ваша корзина пуста</h4>
          </div>
        )}
      </div>
    </div>
  );
});

export default Basket;

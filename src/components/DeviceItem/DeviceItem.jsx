import React, { useContext } from "react";
import "./DeviceItem.css";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../utils/consts";
import { addToBasket } from "../../http/basketApi";
import { Context } from "../..";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  const { user } = useContext(Context);

  const userId = user?.user?.id;

  const handleAddToBasket = async (userId, deviceId) => {
    try {
      await addToBasket(userId, device.id);
      alert("Товар добавлен в корзину!");
    } catch (error) {
      console.error(error);
      alert("Не удалось добавить товар в корзину.");
    }
  };
  return (
    <div className="DeviceItem">
      <div
        className="DeviceItemImg"
        onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
      >
        <img src={process.env.REACT_APP_API_URL + device.img} alt="" />
      </div>
      <div
        className="DeviceItemInfo"
        onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
      >
        <span>{device.name}</span>
        <span>{device.price} ₽</span>
      </div>
      <div className="BuyButton">
        {device.sklad === 0 ? (
          <button className="button noSkladBtn">Нет в наличии</button>
        ) : (
          <button className="button buyBtn" onClick={handleAddToBasket}>
            В корзину
          </button>
        )}
      </div>
    </div>
  );
};

export default DeviceItem;

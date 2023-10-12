import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./DevicePage.css";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../../http/deviceApi";
import { addToBasket } from "../../http/basketApi";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const DevicePage = observer(() => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
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

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <div className="DevicePage">
      <Navbar />
      <div className="container">
        <div className="devicePageWrapper">
          <div className="devicePageCard">
            <div className="devicePageCardLeft">
              <img src={process.env.REACT_APP_API_URL + device.img} alt="" />
            </div>
            <div className="devicePageCardRight">
              <div className="devicePageCardName">
                <h1>{device.name}</h1>
              </div>
              <div className="devicePageCardPrice">
                <span>{device.price} ₽</span>
              </div>
              <div className="devicePageCardButton">
                {device.sklad === 0 ? (
                  <button className="button noSkladButtonPageDevice">
                    Нет в наличии
                  </button>
                ) : (
                  <button
                    className="button addToBasketBtn"
                    onClick={handleAddToBasket}
                  >
                    Добавить в корзину
                  </button>
                )}
              </div>
              <div className="hlGray"></div>
              <div className="devicePageCardStats">
                <h3>Характеристики</h3>
                <div>
                  {device.info.map((info, index) => (
                    <div
                      className="rowInfo"
                      key={info.id}
                      style={{
                        background: index % 2 === 0 ? "#4e5b84" : "transparent",
                        padding: 10,
                      }}
                    >
                      <strong>{info.title}:</strong>
                      {info.description}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DevicePage;

import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "../../index";
import "./SearchHide.css";
import { fetchDevices } from "../../http/deviceApi";

const SearchHide = observer(({ show, onHide }) => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchDevices().then((data) => {
      device.setDevices(data.rows);
    });
  }, []);

  return (
    <div className="SearchHide" show={show} onHide={onHide}>
      <div className="searchHideMenu">
        {device.devices.map((d) => (
          <div className="searchDeviceCard">
            <img src={process.env.REACT_APP_API_URL + d.img} alt="" />
            <div className="searchDeviceInfo">
              <span>{d.name}</span>
              <span>{d.price}$</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default SearchHide;

import React, { useState, useContext, useEffect } from "react";
import "./Search.css";
import { BsSearch } from "react-icons/bs";
import { observer } from "mobx-react-lite";
import { fetchDevices } from "../../http/deviceApi";
import { Context } from "../../index";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../utils/consts";

const Search = observer(() => {
  const { device } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDevices().then((data) => {
      device.setDevices(data.rows);
    });
  }, []);

  function handleToggle() {
    const hide = document.getElementById("hideSearch");
    if (hide.style.display === "none") {
      hide.style.display = "block";
    } else {
      hide.style.display = "none";
    }
  }

  return (
    <div className="Search">
      <form className="searchForm" action="">
        <input
          className="searchInput"
          type="text"
          placeholder="Что вы ищете?"
          onClick={handleToggle}
        />
        <button className="searchBtn">
          <BsSearch />
        </button>
      </form>
      <div className="SearchHide" id="hideSearch">
        <div className="searchHideMenu">
          {device.devices.map((d) => (
            <div
              className="searchDeviceCard"
              key={d.id}
              device={d}
              onClick={() => navigate(DEVICE_ROUTE + "/" + d.id)}
            >
              <img src={process.env.REACT_APP_API_URL + d.img} alt="" />
              <div className="searchDeviceInfo">
                <span>{d.name}</span>
                <span>{d.price}$</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Search;

import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../../index";
import DeviceItem from "../../../../components/DeviceItem/DeviceItem";
import Navbar from "../../../../components/Navbar/Navbar";
import "./PodSystems.css";
import {
  fetchBrands,
  fetchDevices,
  fetchFlavor,
  fetchValue,
} from "../../../../http/deviceApi";
import { observer } from "mobx-react-lite";

const PodSystems = observer(() => {
  const { device } = useContext(Context);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const filteredBrands = device.brands.filter(
    (d) => d.categoryId === 33 || d.categoryId === 40
  );
  const sortedBrands = filteredBrands.slice().sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const filteredDevices = device.devices
    .filter((d) => d.typeId === 9)
    .filter(
      (d) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(d.categoryId)
    )

    .filter(
      (d) => selectedBrands.length === 0 || selectedBrands.includes(d.brandId)
    );

  const handleBrandCheckboxChange = (id) => {
    if (selectedBrands.includes(id)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== id));
    } else {
      setSelectedBrands([...selectedBrands, id]);
    }
  };

  useEffect(() => {
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices().then((data) => {
      device.setDevices(data.rows);
    });
  }, []);

  return (
    <div className="PodSystems">
      <Navbar />
      <div className="container">
        <div className="Title">
          <h1>POD-СИСТЕМЫ</h1>
        </div>
        <div className="PageWrapper">
          <div className="filterOnPage">
            <form className="filterForm">
              <h4 className="filterTitle">Бренд</h4>
              {sortedBrands.map((d) => {
                return (
                  <div className="checkbox">
                    <input
                      id={d.name}
                      type="checkbox"
                      onChange={() => handleBrandCheckboxChange(d.id)}
                      onClick={() => {}}
                    />
                    <label htmlFor={d.name}>{d.name}</label>
                  </div>
                );
              })}
            </form>
          </div>
          <div className="deviceSide">
            <div className="DeviceList">
              {filteredDevices.map((device) => (
                <DeviceItem key={device.id} device={device} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PodSystems;

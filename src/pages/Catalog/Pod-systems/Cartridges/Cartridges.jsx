import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../index";
import DeviceItem from "../../../../components/DeviceItem/DeviceItem";
import Navbar from "../../../../components/Navbar/Navbar";
import "./Cartridges.css";
import {
  fetchBrands,
  fetchDevices,
  fetchValue,
} from "../../../../http/deviceApi";
import { observer } from "mobx-react-lite";

const Cartridges = observer(() => {
  const { device } = useContext(Context);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);

  const filteredBrands = device.brands.filter(
    (d) => d.categoryId === 37 || d.categoryId === 40
  );
  const filteredValuesOfCategory = device.value.filter(
    (c) => c.categoryId === 37
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
    .filter((d) => d.typeId === 18)
    .filter(
      (d) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(d.categoryId)
    )
    .filter(
      (d) => selectedBrands.length === 0 || selectedBrands.includes(d.brandId)
    )
    .filter(
      (d) => selectedValue.length === 0 || selectedValue.includes(d.valueId)
    );

  const handleBrandCheckboxChange = (id) => {
    if (selectedBrands.includes(id)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== id));
    } else {
      setSelectedBrands([...selectedBrands, id]);
    }
  };

  const handleValueCheckboxChange = (id) => {
    if (selectedValue.includes(id)) {
      setSelectedValue(selectedValue.filter((v) => v !== id));
    } else {
      setSelectedValue([...selectedValue, id]);
    }
  };

  useEffect(() => {
    fetchBrands().then((data) => device.setBrands(data));
    fetchValue().then((data) => device.setValue(data));
    fetchDevices().then((data) => {
      device.setDevices(data.rows);
    });
  }, []);

  return (
    <div className="Jidkosti">
      <Navbar />
      <div className="container">
        <div className="Title">
          <h1>Картриджи</h1>
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
            <form className="filterForm">
              <h4 className="filterTitle">Объем картриджа</h4>
              {filteredValuesOfCategory.map((value) => {
                return (
                  <div className="checkbox">
                    <input
                      id={value.name}
                      type="checkbox"
                      onChange={() => handleValueCheckboxChange(value.id)}
                      onClick={() => {}}
                    />
                    <label htmlFor={value.name}>{value.name}</label>
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

export default Cartridges;

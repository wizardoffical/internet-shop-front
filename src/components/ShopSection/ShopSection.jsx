import React from "react";
import "./ShopSection.css";
import img1 from "../../assets/img/Screenshot_1.png";
import img2 from "../../assets/img/Screenshot_7.png";

const ShopSection = () => {
  return (
    <div className="ShopSection">
      <div className="ShopSectionSpans">
        <span>
          1. 13 мл объём жидкости и мощный, перезаряжаемый аккумулятор на 650
          мАч с 5000 затяжками{" "}
        </span>
        <span>
          2. 100% воспроизведение вкуса и плотные облака благодаря испарителю на
          сетке с сопротивлением 1,2 Ом{" "}
        </span>
        <span>3. Регулируемый поток воздуха для различных стилей парения </span>
        <span>
          4. Аутентичный дизайн с использованием технологии двухцветного литья
        </span>
        <span>
          5. 14 натуральных ароматов на базе солевого никотина, основанных на
          предпочтениях клиентов
        </span>
      </div>
      <div className="Lines">
        <span className="hLine"></span>
        <span className="hLineCircle"></span>
        <span className="hLine"></span>
      </div>
      <h3 style={{ textAlign: "center", marginBottom: "40px" }}>Вкусы</h3>
      <div className="flavors">
        <div className="flavorsPods">
          <img src={img1} alt="" />
          <span>Для него</span>
        </div>
        <div className="flavorsPods">
          <img src={img2} alt="" />
          <span>Для нее</span>
        </div>
        <div className="flavorsPods">
          <img src={img1} alt="" />
          <span>Для него</span>
        </div>
        <div className="flavorsPods" style={{ marginBottom: "80px" }}>
          <img src={img2} alt="" />
          <span>Для нее</span>
        </div>
        <div className="flavorsPods" style={{ marginBottom: "80px" }}>
          <img src={img1} alt="" />
          <span>Для него</span>
        </div>
        <div className="flavorsPods" style={{ marginBottom: "80px" }}>
          <img src={img2} alt="" />
          <span>Для нее</span>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;

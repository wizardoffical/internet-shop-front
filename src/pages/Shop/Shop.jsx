import { observer } from "mobx-react-lite";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ShopSection from "../../components/ShopSection/ShopSection";
import ShopSlider from "../../components/ShopSlider/ShopSlider";
import "./Shop.css";

const Shop = observer(() => {
  return (
    <div className="Shop">
      <Navbar />
      <section>
        <ShopSlider />
        <div className="container">
          <ShopSection />
        </div>
      </section>
    </div>
  );
});

export default Shop;

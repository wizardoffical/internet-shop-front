import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { SHOP_ROUTE } from "../../utils/consts";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footerText">
        <h7>Наши социальные сети</h7>
        <div className="footerLinks">
          <Link to={"https://t.me/dopetalk_shop"} target="_blank">
            <BsTelegram />
          </Link>
          <Link to={"https://t.me/dopetalk_shop"} target="_blank">
            <BsTelegram />
          </Link>
          <Link to={"https://t.me/dopetalk_shop"} target="_blank">
            <BsTelegram />
          </Link>
          <Link to={"https://t.me/dopetalk_shop"} target="_blank">
            <BsTelegram />
          </Link>
        </div>
        <div className="footerCopyright">
          <span className="copyRightText">
            Copyright © 2023 DopeTalk. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../..";
import "./Navbar.css";
import {
  ACCESSORIES_ROUTE,
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  VAPORIZERS_ROUTE,
  POD_SYSTEMS_ROUTE,
  JIDKOSTI_ROUTE,
  TOVARI_DLYA_KALYANA_ROUTE,
  ODNORAZOVIE_PODI_ROUTE,
  CARTRIDGES_ROUTE,
  CONTACTS_ROUTE,
} from "../../utils/consts";

const Navbar = observer(() => {
  return (
    <div className="Navbar">
      <ul className="typeList">
        <li className="typeListItem">
          <Link to={POD_SYSTEMS_ROUTE}>POD-системы</Link>
          <div className="typeListWrapper">
            <ul className="categoryList">
              <li className="categoryListItem">
                <Link to={CARTRIDGES_ROUTE}>Картриджи</Link>
              </li>
              <li className="hl"></li>
              <li className="categoryListItem">
                <Link to={VAPORIZERS_ROUTE}>Испарители</Link>
              </li>
              <li className="hl"></li>
            </ul>
          </div>
        </li>
        <li className="typeListItem">
          <Link Link to={ODNORAZOVIE_PODI_ROUTE}>
            Одноразовые устройства
          </Link>
        </li>
        <li className="typeListItem">
          <Link to={JIDKOSTI_ROUTE}>Жидкости</Link>
        </li>
        <li className="typeListItem">
          <Link to={TOVARI_DLYA_KALYANA_ROUTE}>Товары для кальяна</Link>
        </li>
        <li className="typeListItem">
          <Link to={CONTACTS_ROUTE}>Контакты</Link>
        </li>
      </ul>
    </div>
  );
});

export default Navbar;

{
  /* НАВБАР ЧЕРЕЗ МАССИВ ИЗ БД 
      <ul className='TypesNavList'>
        {device.types.map(type => 
            <li className='TypesNavListItem'>
              {type.name}
              <ul className='CategoriesNavList'>
                {device.categories.filter(category => category.typeId === type.id).map(category => 
                  <li className='CategoriesNavListItem'>{category.name}</li>
                  )}
              </ul>
            </li>    
        )}
      </ul> */
}

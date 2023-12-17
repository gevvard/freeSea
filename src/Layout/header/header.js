import React, { useState } from "react";

import { menuItems } from "../../confings/constants";
import Button from "../../components/button/button";

import svg from "../../assets/images/phone/Solid.svg";
import menu from "../../assets/images/header/menu.png";

import css from "./header.module.scss";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const openMenu = () => {
    setIsMenuOpened(true);
  };

  const scrollTo = (item) => {
    const el = document.getElementById(item);
    setIsMenuOpened(false);
    el?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  return (
    <header className={css.headerContainer}>
      <div></div>
      <ul className={css.menu}>
        {menuItems?.map((item) => {
          return (
            <li key={item} id={item.id} onClick={() => scrollTo(item)}>
              {item}
            </li>
          );
        })}
      </ul>
      <div className={css.container}>
        <div className={css.callMeContainer}>
          <div className={css.infoContainer}>
            <img src={svg} alt="" />
            <p>+374 (77) 77-77-77</p>
          </div>
          <a href="tel:+4733378901">Call me</a>
        </div>
        <Button text="ORDER" size="small" variant={"primary"} />
        <img className={css.menuIcon} src={menu} alt="" onClick={openMenu} />
      </div>
      {isMenuOpened?
      <div className={css.mobileMenu}>
        {menuItems?.map((item) => {
          return (
            <div
              key={item}
              id={item.id}
              onClick={() => scrollTo(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
: null
      }
    </header>
  );
};

export default Header;

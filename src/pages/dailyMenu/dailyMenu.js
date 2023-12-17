import React from "react";

import Duration from "./components/duration/duration";

import { dailyMenuItems, weekDays } from "../../confings/constants";

import css from "./dailyMenu.module.scss";

const renderMenuItem = ({ img, title, calories, id }) => (
  <div className={css.menuItem} key={id}>
    <img src={img} alt="" />
    <div className={css.title}>{title}</div>
    <div className={css.calories}>{calories}</div>
  </div>
);

const DailyMenu = () => {
  return (
    <div className={css.dailyMenu} id="Menu">
      <div className={css.dailyMenuTitle}>Sample menu for the day</div>
      <div className={css.dailyMenuContent}>
        <div className={css.meals}>
          <div className={css.weekDays}>
            {weekDays?.map((day) => (
              <div key={day} className={css.weekDay}>
                {day}
              </div>
            ))}
          </div>
          <div className={css.text}>
            3 meals,
            <div>1541 ccal</div>
          </div>
          <div className={css.menuItems}>
            {dailyMenuItems.map((item) => renderMenuItem(item))}
          </div>
        </div>
        <Duration />
      </div>
    </div>
  );
};

export default DailyMenu;

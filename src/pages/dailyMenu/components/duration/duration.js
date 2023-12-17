import React from "react";

import infoIcon from "../../../../assets/images/menu/info-icon.svg";

import css from "./duration.module.scss";


const Duration = () => {
  return (
    <div className={css.duration}>
      <div className={css.durationTitle}>Duration</div>
      <div className={css.time}>
        <div className={css.timeOption}>test order</div>
        <div className={css.timeOption}>2 weeks</div>
        <div className={css.timeOption}>month</div>
      </div>
      <div className={css.separatorLine} />
      <div className={css.orderInfo}>
        <div className={css.row}>
          <div>36 meals, 12 days</div>
          <div>660 AMD for day</div>
        </div>
        <div className={css.row}>
          <div>
            Sale
            <img src={infoIcon} alt="info" />
          </div>
          <div>-2 040 AMD</div>
        </div>
        <div className={css.row}>
          <div>
            Delivery
            <img src={infoIcon} alt="info" />
          </div>
          <div>0 AMD</div>
        </div>
      </div>
      <div className={css.telephoneNumber}>
        <div>Your telephone number</div>
        <input className={css.number} value={'+374'} onChange={() => {}}/>
      </div>

      <div className={css.clarificationText}>
        to clarify details of the order
      </div>
      <div className={css.order}>
        <span>Order</span> <span>12 989 AMD</span>
      </div>
    </div>
  );
};

export default Duration;

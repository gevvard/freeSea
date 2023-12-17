import React from "react";

import css from "./delivery.module.scss";

const Delivery = () => {
  return (
    <div className={css.deliveryMap} id="Delivery">
      <div className={css.title}>Delivery Map</div>
      <div className={css.container}>
        <div className={css.imgContainer}>
          <iframe
            src="http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={css.infoContainer}>
          <h3>Check the delivery price</h3>
          <div className={css.form}>
            <label htmlFor="enter adress">
              Enter adress
              <input type="text" />
            </label>
          </div>
          <div className={css.info}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#FFBD74" />
            </svg>
            <p>
              Free delivery in Yerevan within the concrete ring. We deliver on
              Mondays, Wednesdays and Fridays in any two-hour interval from 6 to
              12.
            </p>
          </div>
          <div className={css.info}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#7F9FE0" />
            </svg>
            <p>In the blue zone, the surcharge is 250 AMD per delivery.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

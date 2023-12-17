import React from "react";
import css from "./testimonlials.module.scss";

const Testimonlials = () => {
  return (
    <>
      <div className={css.title}>Testimonlials</div>
      <div className={css.testimonlials}>
        {[1, 2, 3].map((index) => (
          <div className={css.testimonlialsItem} key={index}>
            <div className={css.date}>01.01.2023</div>
            <div className={css.sizes}>390 x 844</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonlials;

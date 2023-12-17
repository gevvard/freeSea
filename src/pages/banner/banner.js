import React from "react";

import Button from "../../components/button/button";

import banner from "../../assets/images/banner.png";
import bannerMobile from "../../assets/images/banner-mobile.png";

import css from "./banner.module.scss";


const Banner = () => {
  return (
    <div className={css.banner}>
      <div className={css.bannerContent}>
        <div className={css.bannerTitle}>
          Delicious breakfast, lunch and dinner
        </div>
        <div className={css.price}>499 AMD</div>
        <div className={css.oldPrice}>660 AMD</div>
        <div className={css.recipe}> for 3 meals a day</div>
        <Button text="ORDER NOW" variant={"tertiary"} size="small" />
      </div>
      <img src={window.innerWidth > 760 ? banner : bannerMobile} alt="banner" />
    </div>
  );
};

export default Banner;

import React from 'react';

import Banner from "../../pages/banner";
import Categories from "../../pages/categories";
import DailyMenu from "../../pages/dailyMenu";
import Testimonlials from "../../pages/testimonlials";
import AboutUs from "../../pages/aboutUs";
import Suggestion from "../../pages/suggestion";
import Delivery from "../../pages/delivery";
import Faq from "../../pages/faq";

const Main = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <DailyMenu/>
      <Delivery/>
      <Testimonlials/>
      <Faq/>
      <AboutUs/>
      <Suggestion/>
    </div>
  );
};

export default Main;
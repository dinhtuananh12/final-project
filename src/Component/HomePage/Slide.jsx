import React from "react";
import { Carousel } from "antd";
import banner from "./../../assets/banner.png";
import banner2 from "./../../assets/banner2.jpg";
import "./home.scss";
const Slide = () => {
   return (
      <div className="slide">
         <Carousel autoplay>
            <div>
               <img className="slide__img" src={banner} alt="" />
            </div>
            <div>
               <img className="slide__img" src={banner2} alt="" />
            </div>
         </Carousel>
      </div>
   );
};

export default Slide;

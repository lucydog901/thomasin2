import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage47 from "../images/47.jpg"
import ringImage47a from "../images/47a.jpg"



export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
      
        <div class="adimg ad1img">
        <img src={ringImage47} alt="Ring 47" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage47a} alt="Ring 47a" />
        </div>
      
      
      </Slider>
    );
  }
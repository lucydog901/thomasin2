import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage32 from "../images/32.jpg"


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
        <img src={ringImage32} alt="Ring 32" />
        </div>
     
      
      </Slider>
    );
  }
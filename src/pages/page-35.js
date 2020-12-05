import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage35 from "../images/35.jpg"
import ringImage35a from "../images/35a.jpg"



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
        <img src={ringImage35} alt="Ring 35" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage35a} alt="Ring 35a" />
        </div>
      
      
      </Slider>
    );
  }
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage13 from "../images/13.jpg"
import ringImage13a from "../images/13a.jpg"
import ringImage13b from "../images/13b.jpg"


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
        <img src={ringImage13} alt="Ring 13" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage13a} alt="Ring 13a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImage13b} alt="Ring 13b" />
        </div>
      
      </Slider>
    );
  }
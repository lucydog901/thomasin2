import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage8 from "../images/8.jpg"
import ringImage8a from "../images/8a.jpg"
import ringImage8b from "../images/8b.jpg"
import ringImage8c from "../images/8c.jpg"

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
        <img src={ringImage8} alt="Ring 8" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage8a} alt="Ring 8a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImage8b} alt="Ring 8b" />
        </div>
        <div class="adimg ad4img">
        <img src={ringImage8c} alt="Ring 8c" />
        </div>
      </Slider>
    );
  }
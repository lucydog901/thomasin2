import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage31 from "../images/31.jpg"
import ringImage31a from "../images/31a.jpg"
import ringImage31b from "../images/31b.jpg"


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
        <img src={ringImage31} alt="Ring 31" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage31a} alt="Ring 31a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImage31b} alt="Ring 31b" />
        </div>
      
      </Slider>
    );
  }
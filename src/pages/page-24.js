import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage24 from "../images/24.jpg"
import ringImage24a from "../images/24a.jpg"
import ringImage24b from "../images/24b.jpg"


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
        <img src={ringImage24} alt="Ring 24" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage24a} alt="Ring 24a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImage24b} alt="Ring 24b" />
        </div>
      
      </Slider>
    );
  }
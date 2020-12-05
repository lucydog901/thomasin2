import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage9 from "../images/9.jpg"
import ringImage9a from "../images/9a.jpg"
import ringImage9b from "../images/9b.jpg"
import ringImage9c from "../images/9c.jpg"
import ringImage9d from "../images/9d.jpg"

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
        <img src={ringImage9} alt="Ring 9" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage9a} alt="Ring 9a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImage9b} alt="Ring 9b" />
        </div>
        <div class="adimg ad4img">
        <img src={ringImage9c} alt="Ring 9c" />
        </div>
        <div class="adimg ad4img">
        <img src={ringImage9d} alt="Ring 9d" />
        </div>
      </Slider>
    );
  }
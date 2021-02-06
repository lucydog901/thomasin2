import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage83 from "../images/unusual/83.jpg"
import ringImage83a from "../images/unusual/83a.jpg"
import ringImage83b from "../images/unusual/83b.jpg"
import ringImage83c from "../images/unusual/83c.jpg"

import { Link } from 'gatsby-plugin-modal-routing'



export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
      
    };
    return (
     
      <div className="container">
      <div className="card">
      <Slider {...settings}>
      
        <div class="adimg ad1img">
        <img src={ringImage83} alt="Ring 83" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage83a} alt="Ring 83a" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage83b} alt="Ring 83b" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage83c} alt="Ring 83c" />
        </div>
     
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Oil spill ring, made the day of the Deepwater Horizon oil spill, April 20, 2010. Sterling silver and copper. </p>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


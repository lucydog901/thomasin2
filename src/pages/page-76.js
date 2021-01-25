import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage76 from "../images/unusual/76.jpg"
import ringImage76a from "../images/unusual/76a.jpg"
import ringImage76b from "../images/unusual/76b.jpg"

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
        <img src={ringImage76} alt="Ring 76" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage76a} alt="Ring 76a" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage76b} alt="Ring 76b" />
        </div>
     
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Claddagh ring made on St. Patrick's Day, 2010. Sterling silver, etched copper, and brass.</p>
  <Link to="/page-83" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


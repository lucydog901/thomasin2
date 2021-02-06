import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage225 from "../images/unusual/225.jpg"
import ringImage225a from "../images/unusual/225a.jpg"
import ringImage225b from "../images/unusual/225b.jpg"

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
        <img src={ringImage225} alt="Ring 225" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage225a} alt="Ring 225a" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage225b} alt="Ring 225b" />
        </div>
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Cat Shadow ring, made from pierced sterling silver sheet. </p>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


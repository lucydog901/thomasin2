import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage253 from "../images/unusual/253.jpg"
import ringImage253a from "../images/unusual/253a.jpg"
import ringImage253b from "../images/unusual/253b.jpg"

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
        <img src={ringImage253} alt="Ring 253" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage253a} alt="Ring 253a" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage253b} alt="Ring 253b" />
        </div>
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Cigarette ring fabricated from sterling silver and copper.</p>
  <Link to="/page-264" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


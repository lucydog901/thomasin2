import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage106 from "../images/unusual/106.jpg"
import ringImage106a from "../images/unusual/106a.jpg"
import ringImage106b from "../images/unusual/106b.jpg"


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
        <img src={ringImage106} alt="Ring 106" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage106a} alt="Ring 106a" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage106b} alt="Ring 106b" />
        </div>
     
     
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Twin Towers ring, made from sterling silver for the Anniversary of the 9/11 attack. </p>
  <Link to="/page-108" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


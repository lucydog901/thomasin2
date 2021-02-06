import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage53 from "../images/unusual/53.jpg"
import ringImage53a from "../images/unusual/53a.jpg"

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
        <img src={ringImage53} alt="Ring 53" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage53a} alt="Ring 53a" />
        </div>
     
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


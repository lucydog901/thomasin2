import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage111 from "../images/everyday/111.jpg"
import ringImage111a from "../images/everyday/111a.jpg"

import { Link } from 'gatsby-plugin-modal-routing'
// import { Link } from "gatsby"


// import Layout from "../components/layout"


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
        <img src={ringImage111} alt="Ring 111" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage111a} alt="Ring 111a" />
        </div>
      
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Sterling silver shadow box with aquamarine. The stone is set in a bezel made of copper tubing from the HVAC system of The Memphis Brooks Museum of Art.</p>
  <Link to="/everyday" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
 
</div>

</div>

</div>

    );
  }


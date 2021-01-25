import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImager8 from "../images/everyday/r8.jpg"
import ringImager8a from "../images/everyday/r8a.jpg"
import ringImager8b from "../images/everyday/r8b.jpg"

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
        <img src={ringImager8} alt="Ring r8" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImager8a} alt="Ring r8a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImager8b} alt="Ring r8b" />
        </div>

       
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Sterling silver with agate cabochon cut by the artist.</p>
  <Link to="/page-119" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <Link to="/everyday" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


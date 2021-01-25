import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImager7 from "../images/everyday/r7.jpg"
import ringImager7a from "../images/everyday/r7a.jpg"
import ringImager7b from "../images/everyday/r7b.jpg"
import ringImager7c from "../images/everyday/r7c.jpg"
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
        <img src={ringImager7} alt="Ring r7" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImager7a} alt="Ring r7a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImager7b} alt="Ring r7b" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImager7c} alt="Ring r7c" />
        </div>
       
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Sterling silver with soldered geometric elements and adjustable band.</p>
  <Link to="/page-r8" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <Link to="/everyday" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImager9 from "../images/everyday/r9.jpg"
import ringImager9a from "../images/everyday/r9a.jpg"
import ringImager9b from "../images/everyday/r9b.jpg"
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
        <img src={ringImager9} alt="Ring r9" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImager9a} alt="Ring r9a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImager9b} alt="Ring r9b" />
        </div>
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Sterling silver with ruby cabochon cut by the artist.</p>
  <Link to="/everyday" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


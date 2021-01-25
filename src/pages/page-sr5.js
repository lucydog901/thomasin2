import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImagesr5 from "../images/sculpture/sr5.jpg"
import ringImagesr5a from "../images/sculpture/sr5a.jpg"
import ringImagesr5b from "../images/sculpture/sr5b.jpg"
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
        <img src={ringImagesr5} alt="Ring sr5" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImagesr5a} alt="Ring sr5a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImagesr5b} alt="Ring sr5b" />
        </div>
      
      
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">
Ring and earrings that combine to make a sculpture, made of sterling silver and copper.</p>
  <Link to="/page-sr6" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <Link to="/sculpture" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
 
</div>

</div>

</div>

    );
  }


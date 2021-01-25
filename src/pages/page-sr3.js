import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImagesr3 from "../images/sculpture/sr3.jpg"
import ringImagesr3a from "../images/sculpture/sr3a.jpg"
import ringImagesr3b from "../images/sculpture/sr3b.jpg"
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
        <img src={ringImagesr3} alt="Ring sr3" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImagesr3a} alt="Ring sr3a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImagesr3b} alt="Ring sr3b" />
        </div>
      
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">
A ring and scatter pin that combine to make a small sculpture. Made of sterling silver, Morrisonite jasper, and freswater pearl. </p>
  <Link to="/page-sr1" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <Link to="/sculpture" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
 
</div>

</div>

</div>

    );
  }


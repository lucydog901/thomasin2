import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage31 from "../images/unusual/31.jpg"
import ringImage31a from "../images/unusual/31a.jpg"
import ringImage31b from "../images/unusual/31b.jpg"



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
        <img src={ringImage31} alt="Ring 31" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage31a} alt="Ring 31a" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage31b} alt="Ring 31b" />
        </div>
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Crown of Thorns Ring, made from sterling silver and sharpened copper roofing nails.

An interpretation of the cilice belt worn by some members of the Roman Catholic church as a constant reminder of Christ's sacrifice to the world. </p>
  <Link to="/page-300" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


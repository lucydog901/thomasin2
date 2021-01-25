import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage100 from "../images/unusual/100.jpg"
import ringImage100a from "../images/unusual/100a.jpg"
import ringImage100b from "../images/unusual/100b.jpg"


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
        <img src={ringImage100} alt="Ring 100" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage100a} alt="Ring 100a" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage100b} alt="Ring 100b" />
        </div>
     
     
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">"Hectorad", made for the Ring a Day challenge on April 10, 2010 - the 100th day of the year. Pierced silver sheet.</p>
  <Link to="/page-106" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


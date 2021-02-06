import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage300 from "../images/unusual/300.jpg"
import ringImage300a from "../images/unusual/300a.jpg"
import ringImage300b from "../images/unusual/300b.jpg"



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
        <img src={ringImage300} alt="Ring 300" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage300a} alt="Ring 300a" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage300b} alt="Ring 300b" />
        </div>
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Made on the 100th day of 2010 from pierced sterling silver sheet. "Ein­hundert" means "100" in German, but this ring has a typo and spells, "Eir­hundert". Proofreading matters.</p>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


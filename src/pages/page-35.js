import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage35 from "../images/unusual/35.jpg"
import ringImage35a from "../images/unusual/35a.jpg"

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
        <img src={ringImage35} alt="Ring 35" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage35a} alt="Ring 35a" />
        </div>
     
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Creepy ring made from antique tintype, clear quartz high dome cabochon, and sterling silver.</p>
  <Link to="/page-53" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


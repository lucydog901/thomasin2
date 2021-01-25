import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImagesr4 from "../images/sculpture/sr4.jpg"
import ringImagesr4a from "../images/sculpture/sr4a.jpg"
import ringImagesr4b from "../images/sculpture/sr4b.jpg"
import ringImagesr4c from "../images/sculpture/sr4c.jpg"

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
        <img src={ringImagesr4} alt="Ring sr4" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImagesr4a} alt="Ring sr4a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImagesr4b} alt="Ring sr4b" />
        </div>
        <div class="adimg ad4img">
        <img src={ringImagesr4c} alt="Ring sr4c" />
        </div>
      
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">A small table sculpture made of several jewelry components: a ring, a pair of earrings, a pendant, and a scatter pin. Made of sterling silver and freshwater pearls</p>
  <Link to="/page-sr2" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <Link to="/sculpture" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
 
</div>

</div>

</div>

    );
  }


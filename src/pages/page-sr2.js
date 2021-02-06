import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImagesr2 from "../images/sculpture/sr2.jpg"
import ringImagesr2a from "../images/sculpture/sr2a.jpg"
import ringImagesr2b from "../images/sculpture/sr2b.jpg"
import ringImagesr2c from "../images/sculpture/sr2c.jpg"
import ringImagesr2d from "../images/sculpture/sr2d.jpg"
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
        <img src={ringImagesr2} alt="Ring sr2" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImagesr2a} alt="Ring sr2a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImagesr2b} alt="Ring sr2b" />
        </div>
        <div class="adimg ad4img">
        <img src={ringImagesr2c} alt="Ring sr2c" />
        </div>
        <div class="adimg ad5img">
        <img src={ringImagesr2d} alt="Ring sr2d" />
        </div>
      
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Ring sculpture made of crazy lace agate, honduran rosewood carved by the artist, and pierced copper sheet. </p>
  <Link to="/sculpture" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
 
</div>

</div>

</div>

    );
  }


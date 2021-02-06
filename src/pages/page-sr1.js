import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImagesr1 from "../images/sculpture/sr1.jpg"
import ringImagesr1a from "../images/sculpture/sr1a.jpg"
import ringImagesr1b from "../images/sculpture/sr1b.jpg"
import ringImagesr1c from "../images/sculpture/sr1c.jpg"
import ringImagesr1d from "../images/sculpture/sr1d.jpg"
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
        <img src={ringImagesr1} alt="Ring sr1" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImagesr1a} alt="Ring sr1a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImagesr1b} alt="Ring sr1b" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImagesr1c} alt="Ring sr1c" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImagesr1d} alt="Ring sr" />
        </div>
      
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">
Sterling silver, brass ring, and clear quartz ring that stands on its own as a sculpture. </p>
  <Link to="/sculpture" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
 
</div>

</div>

</div>

    );
  }


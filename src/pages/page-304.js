import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage304 from "../images/unusual/304.jpg"
import ringImage304a from "../images/unusual/304a.jpg"
import ringImage304b from "../images/unusual/304b.jpg"



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
        <img src={ringImage304} alt="Ring 304" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage304a} alt="Ring 304a" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage304b} alt="Ring 304b" />
        </div>
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Silly knife ring made from sterling silver and ebony riveted with nickel silver.</p>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


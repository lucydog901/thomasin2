import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage8 from "../images/unusual/8.jpg"
import ringImage8a from "../images/unusual/8a.jpg"
import ringImage8b from "../images/unusual/8b.jpg"
import ringImage8c from "../images/unusual/8c.jpg"


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
        <img src={ringImage8} alt="Ring 8" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage8a} alt="Ring 8a" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage8b} alt="Ring 8b" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage8c} alt="Ring 8c" />
        </div>
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">A dangerous ring made from copper and an electrical plug adapter. Copper wires have been soldered to the inside of the bezel and inserted into the adapter.</p>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


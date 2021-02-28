import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage24 from "../images/unusual/24.jpg"
import ringImage24a from "../images/unusual/24a.jpg"
import ringImage24b from "../images/unusual/24b.jpg"
import ConditionalLayout from "../components/ConditionalLayout"
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
      <ConditionalLayout>
      <div className="container">
      <div className="card">
      <Slider {...settings}>
      
        <div class="adimg ad1img">
        <img src={ringImage24} alt="Ring 24" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage24a} alt="Ring 24a" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage24b} alt="Ring 24b" />
        </div>
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Kite ring made from nickel silver, copper, and brass.</p>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>
</ConditionalLayout>
    );
  }


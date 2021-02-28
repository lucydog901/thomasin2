import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage233 from "../images/everyday/233.jpg"
import ringImage233a from "../images/everyday/233a.jpg"
import ringImage233b from "../images/everyday/233b.jpg"
import ringImage233c from "../images/everyday/233c.jpg"
import { Link } from 'gatsby-plugin-modal-routing'
import ConditionalLayout from "../components/ConditionalLayout"


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
        <img src={ringImage233} alt="Ring 233" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage233a} alt="Ring 233a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImage233b} alt="Ring 233b" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImage233c} alt="Ring 233c" />
        </div>
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Sterling silver and cherry wood with brass inlay.</p>
  <Link to="/everyday" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>
 </ConditionalLayout>
    );
  }


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage79 from "../images/everyday/79.jpg"
import ringImage79a from "../images/everyday/79a.jpg"
import ringImage79b from "../images/everyday/79b.jpg"
// import { Link } from 'gatsby-plugin-modal-routing'
// import { Link } from "gatsby"


// import Layout from "../components/layout"


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
        <img src={ringImage79} alt="Ring 79" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage79a} alt="Ring 79a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImage79b} alt="Ring 79b" />
        </div>
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Sterling silver shadow box with etched copper and freshwater pearl.</p>
  <a href="/page-233" class="btn btn-secondary btn-block">Next Ring</a>
  <a href="/everyday" class="btn btn-secondary btn-block">Back to Gallery</a>
  
</div>

</div>

</div>

    );
  }

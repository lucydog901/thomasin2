import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage365 from "../images/everyday/365.jpg"
import ringImage365a from "../images/everyday/365a.jpg"
import ringImage365b from "../images/everyday/365b.jpg"
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
        <img src={ringImage365} alt="Ring 365" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage365a} alt="Ring 365a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImage365b} alt="Ring 365b" />
        </div>
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Sterling silver and pink tourmaline with a square band.</p>
  <a href="/everyday" class="btn btn-secondary btn-block">Back to Gallery</a>
  <a href="/page-107" class="btn btn-secondary btn-block">Next Ring</a>
</div>

</div>

</div>

    );
  }


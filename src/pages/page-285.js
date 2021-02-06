import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage285 from "../images/everyday/285.jpg";
import ringImage285b from "../images/everyday/285b.jpg";
import ringImage285c from "../images/everyday/285c.jpg";
import { Link } from 'gatsby-plugin-modal-routing'
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
        <img src={ringImage285} alt="Ring 285" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImage285b} alt="Ring 285b" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImage285c} alt="Ring 285c" />
        </div>
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Sterling silver shadow box with freshwater pearl and copper.</p>
  <Link to="/everyday" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


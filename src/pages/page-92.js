import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage92 from "../images/everyday/92.jpg"
import ringImage92a from "../images/everyday/92a.jpg"
import ringImage92b from "../images/everyday/92b.jpg"
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
        <img src={ringImage92} alt="Ring 92" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage92a} alt="Ring 92a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImage92b} alt="Ring 92b" />
        </div>
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Sterling silver shadow box with drilled copper and pink tourmaline cabochon.</p>
  <Link to="/page-r9" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <Link to="/everyday" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
 
</div>

</div>

</div>

    );
  }


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImager6 from "../images/everyday/r6.jpg"
import ringImager6a from "../images/everyday/r6a.jpg"
import ringImager6b from "../images/everyday/r6b.jpg"
import ringImager6c from "../images/everyday/r6c.jpg"
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
        <img src={ringImager6} alt="Ring r6" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImager6a} alt="Ring r6a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImager6b} alt="Ring r6b" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImager6c} alt="Ring r6c" />
        </div>
       
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Sterling silver with untreated Stone Mountain turquoise cabochon.</p>
  <Link to="/page-r7" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <a href="/everyday" class="btn btn-secondary btn-block">Back to Gallery</a>
  
</div>

</div>

</div>

    );
  }


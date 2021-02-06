import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImager4 from "../images/everyday/r4.jpg"
import ringImager4a from "../images/everyday/r4a.jpg"
import ringImager4b from "../images/everyday/r4b.jpg"
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
        <img src={ringImager4} alt="Ring r4" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImager4a} alt="Ring r4a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImager4b} alt="Ring r4b" />
        </div>
       
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Sterling silver with prong set prehnite and square band.</p>
  <Link to="/everyday" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


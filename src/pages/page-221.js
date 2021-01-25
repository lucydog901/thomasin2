import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage221 from "../images/unusual/221.jpg"
import ringImage221a from "../images/unusual/221a.jpg"




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
        <img src={ringImage221} alt="Ring 221" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage221a} alt="Ring 221a" />
        </div>
     
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Shadow person ring made of sterling silver.</p>
  <Link to="/page-24" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


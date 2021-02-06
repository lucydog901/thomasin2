import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage13 from "../images/unusual/13.jpg"
import ringImage13a from "../images/unusual/13a.jpg"
import ringImage13b from "../images/unusual/13b.jpg"



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
        <img src={ringImage13} alt="Ring 13" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage13a} alt="Ring 13a" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage13b} alt="Ring 13b" />
        </div>
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Made on January 13, 2010, the day after Haiti was devastated by a massive earthquake. This ring is made of sterling silver and features the National Palace, which was badly damaged. The artist organized an online auction of this ring and rings made by others participating in the Ring a Day Challenge. $1600 was raised and all proceeds went to a charity to rebuild Haiti.</p>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


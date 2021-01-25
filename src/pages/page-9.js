import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage9 from "../images/unusual/9.jpg"
import ringImage9a from "../images/unusual/9a.jpg"
import ringImage9b from "../images/unusual/9b.jpg"
import ringImage9c from "../images/unusual/9c.jpg"
import ringImage9d from "../images/unusual/9d.jpg"
import ringImage9e from "../images/unusual/9e.jpg"


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
        <img src={ringImage9} alt="Ring 9" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage9a} alt="Ring 9a" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage9b} alt="Ring 9b" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage9c} alt="Ring 9c" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage9d} alt="Ring 9d" />
        </div>
        <div class="adimg ad1img">
        <img src={ringImage9e} alt="Ring 9e" />
        </div>
   
   
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">The Bad Girl Button Ring. When the copper button is depressed a sharpened steel nail pokes the wearer in the finger. Made with sterling silver, nickel silver, copper, ballpoint pen spring, and a nail. </p>
  <Link to="/page-13" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <Link to="/unusual" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link>
  
</div>

</div>

</div>

    );
  }


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage107 from "../images/everyday/107.jpg"
import ringImage107a from "../images/everyday/107a.jpg"
import ringImage107b from "../images/everyday/107b.jpg"
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
        <img src={ringImage107} alt="Ring 107" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage107a} alt="Ring 107a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImage107b} alt="Ring 107b" />
        </div>
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Sterling silver and African amethyst cabochon.</p>
  <Link to="/page-111" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <a href="/everyday" class="btn btn-secondary btn-block">Back to Gallery</a>

</div>

</div>

</div>

    );
  }


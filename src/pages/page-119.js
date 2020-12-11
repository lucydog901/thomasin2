import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage119 from "../images/everyday/119.jpg"
import ringImage119a from "../images/everyday/119a.jpg"
import ringImage119b from "../images/everyday/119b.jpg"
import { Link } from 'gatsby-plugin-modal-routing'
// import { Link } from "gatsby"
// import { navigate } from 'gatsby'


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
        <img src={ringImage119} alt="Ring 119" />
        </div>
        <div class="adimg ad2img">
        <img src={ringImage119a} alt="Ring 119a" />
        </div>
        <div class="adimg ad3img">
        <img src={ringImage119b} alt="Ring 119b" />
        </div>
     
      </Slider>
    
      
<div className="card-body"><br></br>
  <p className="card-text">Sterling silver and prong set spessartine garnet.</p>
  <Link to="/page-365" asModal class="btn btn-secondary btn-block">Next Ring</Link>
  <a href="/everyday" class="btn btn-secondary btn-block">Back to Gallery</a>
  
</div>

</div>

</div>

    );
  }


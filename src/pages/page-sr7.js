import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImagesr7 from "../images/sculpture/sr7.jpg"
import ringImagesr7a from "../images/sculpture/sr7a.jpg"
import ringImagesr7b from "../images/sculpture/sr7b.jpg"
import ringImagesr7c from "../images/sculpture/sr7c.jpg"
import { Link } from 'gatsby-plugin-modal-routing'
import ConditionalLayout from "../components/ConditionalLayout"


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
    <ConditionalLayout>
      <div className="container">
        <div className="card">
          <Slider {...settings}>

            <div class="adimg ad1img">
              <img src={ringImagesr7} alt="Ring sr7" />
            </div>
            <div class="adimg ad2img">
              <img src={ringImagesr7a} alt="Ring sr7a" />
            </div>
            <div class="adimg ad3img">
              <img src={ringImagesr7b} alt="Ring sr7b" />
            </div>
            <div class="adimg ad4img">
              <img src={ringImagesr7c} alt="Ring sr7c" />
            </div>
         

          </Slider>


          <div className="card-body"><br></br>
            <p className="card-text">
              Ring and earrings that combine to make a sculpture, made of sterling silver and copper.</p>
            <Link to="/sculpture" state={{
              noScroll: true
            }} class="btn btn-secondary btn-block">Back to Gallery</Link>

          </div>

        </div>

      </div>
    </ConditionalLayout>
  );
}


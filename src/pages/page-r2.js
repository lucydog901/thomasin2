import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImager2 from "../images/everyday/r2.jpg"
import ringImager2a from "../images/everyday/r2a.jpg"
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
              <img src={ringImager2} alt="Ring r2" />
            </div>
            <div class="adimg ad2img">
              <img src={ringImager2a} alt="Ring r2a" />
            </div>


          </Slider>


          <div className="card-body"><br></br>
            <p className="card-text">Sterling silver shadow box with peridot cabochon.</p>
            <Link to="/everyday" state={{
              noScroll: true
            }} class="btn btn-secondary btn-block">Back to Gallery</Link>

          </div>

        </div>

      </div>
    </ConditionalLayout>
  );
}


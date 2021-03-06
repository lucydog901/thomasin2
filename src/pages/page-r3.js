import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImager3 from "../images/everyday/r3.jpg"
import ringImager3a from "../images/everyday/r3a.jpg"
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
              <img src={ringImager3} alt="Ring r3" />
            </div>
            <div class="adimg ad2img">
              <img src={ringImager3a} alt="Ring r3a" />
            </div>


          </Slider>


          <div className="card-body"><br></br>
            <p className="card-text">Sterling silver shadow box with brass, etched shibuichi, and peridot cabochon.</p>
            <Link to="/everyday" state={{
              noScroll: true
            }} class="btn btn-secondary btn-block">Back to Gallery</Link>

          </div>

        </div>

      </div>
    </ConditionalLayout>
  );
}


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImager5 from "../images/everyday/r5.jpg"
import ringImager5a from "../images/everyday/r5a.jpg"
import ringImager5b from "../images/everyday/r5b.jpg"
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
              <img src={ringImager5} alt="Ring r5" />
            </div>
            <div class="adimg ad2img">
              <img src={ringImager5a} alt="Ring r5a" />
            </div>
            <div class="adimg ad3img">
              <img src={ringImager5b} alt="Ring r5b" />
            </div>


          </Slider>


          <div className="card-body"><br></br>
            <p className="card-text">Oxidized sterling silver with agate cabochon.</p>
            {/* <Link to="/everyday" state={{
    noScroll: true
  }} class="btn btn-secondary btn-block">Back to Gallery</Link> */}
            <Link to="/everyday" state={{
              noScroll: true
            }} class="btn btn-secondary btn-block">Back to Gallery</Link>
          </div>

        </div>

      </div>
    </ConditionalLayout>
  );
}


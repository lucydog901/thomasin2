import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage108 from "../images/unusual/108.jpg"
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
              <img src={ringImage108} alt="Ring 108" />
            </div>


          </Slider>


          <div className="card-body"><br></br>
            <p className="card-text">Bright Idea ring, made from a light bulb and copper.</p>
            <Link to="/unusual" state={{
              noScroll: true
            }} class="btn btn-secondary btn-block">Back to Gallery</Link>

          </div>

        </div>

      </div>
    </ConditionalLayout>
  );
}


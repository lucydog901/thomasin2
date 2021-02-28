import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage264 from "../images/unusual/264.jpg"
import ringImage264a from "../images/unusual/264a.jpg"
import ringImage264b from "../images/unusual/264b.jpg"
import ringImage264c from "../images/unusual/264c.jpg"
import ConditionalLayout from "../components/ConditionalLayout"
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
    <ConditionalLayout>
      <div className="container">
        <div className="card">
          <Slider {...settings}>

            <div class="adimg ad1img">
              <img src={ringImage264} alt="Ring 264" />
            </div>
            <div class="adimg ad1img">
              <img src={ringImage264a} alt="Ring 264a" />
            </div>
            <div class="adimg ad1img">
              <img src={ringImage264b} alt="Ring 264b" />
            </div>
            <div class="adimg ad1img">
              <img src={ringImage264c} alt="Ring 264c" />
            </div>


          </Slider>


          <div className="card-body"><br></br>
            <p className="card-text">Peace ring made from pierced and formed copper sheet.</p>
            <Link to="/unusual" state={{
              noScroll: true
            }} class="btn btn-secondary btn-block">Back to Gallery</Link>

          </div>

        </div>

      </div>
    </ConditionalLayout>
  );
}


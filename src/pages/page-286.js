import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ringImage286 from "../images/unusual/286.jpg"
import ringImage286a from "../images/unusual/286a.jpg"
import ringImage286b from "../images/unusual/286b.jpg"
import ringImage286c from "../images/unusual/286c.jpg"
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
              <img src={ringImage286} alt="Ring 286" />
            </div>
            <div class="adimg ad1img">
              <img src={ringImage286c} alt="Ring 286c" />
            </div>
            <div class="adimg ad1img">
              <img src={ringImage286b} alt="Ring 286b" />
            </div>
            <div class="adimg ad1img">
              <img src={ringImage286a} alt="Ring 286a" />
            </div>


          </Slider>


          <div className="card-body"><br></br>
            <p className="card-text">Chilean Miner ring with working winch, made of sterling silver. Created on the day of the successful rescue of 33 miners in Chile who had been trapped underground for 69 days.</p>
            <Link to="/unusual" state={{
              noScroll: true
            }} class="btn btn-secondary btn-block">Back to Gallery</Link>

          </div>

        </div>

      </div>
    </ConditionalLayout>
  );
}


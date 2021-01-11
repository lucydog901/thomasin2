import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import webImage1 from "../images/splash/web1.png"
import webImage2 from "../images/splash/web2.png"
import webImage3 from "../images/splash/web3.png"
import webImage4 from "../images/splash/web4.png"
import webImage5 from "../images/splash/web5.png"
import splashImage1 from "../images/splash/splash1.png"
import splashImage2 from "../images/splash/splash2.png"
import splashImage3 from "../images/splash/splash3.png"
import splashImage4 from "../images/splash/splash4.png"
import splashImage5 from "../images/splash/splash5.png"
import splashImage6 from "../images/splash/splash6.png"


import Layout from "../components/layout"


export default function SimpleSlider() {
    var settings = {
      infinite: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      
    };
    return (
      <Layout>
      <div className="container">
      <div className="row">
      <div className="col-sm-6">
      
      <div className="card">
      <Slider {...settings}>
      
        <div class="adimg ad1img">
        <img src={webImage1} alt="Ring 79" />
        </div>
        <div class="adimg ad2img">
        <img src={webImage2} alt="Ring 79a" />
        </div>
        <div class="adimg ad3img">
        <img src={webImage3} alt="Ring 79b" />
        </div>
        <div class="adimg ad4img">
        <img src={webImage4} alt="Ring 79b" />
        </div>
        <div class="adimg ad5img">
        <img src={webImage5} alt="Ring 79b" />
        </div>
     
      </Slider>
    
      
<div className="card-body">
  <h2 className="card-text" align="center">Coding Projects</h2>
</div>
</div>
</div>
<div className="col-sm-6">
      
      <div className="card">
      <Slider {...settings}>
      
        <div class="adimg ad1img">
        <img src={splashImage1} alt="Ring 79" />
        </div>
        <div class="adimg ad2img">
        <img src={splashImage2} alt="Ring 79a" />
        </div>
        <div class="adimg ad3img">
        <img src={splashImage3} alt="Ring 79b" />
        </div>
        <div class="adimg ad4img">
        <img src={splashImage4} alt="Ring 79b" />
        </div>
        <div class="adimg ad5img">
        <img src={splashImage5} alt="Ring 79b" />
        </div>
        <div class="adimg ad6img">
        <img src={splashImage6} alt="Ring 79b" />
        </div>
     
      </Slider>
    
      
<div className="card-body">
  <h2 className="card-text" align="center">Handwrought Jewelry</h2>
</div>
</div>
</div>
</div>
</div>


</Layout>
    );
  }


import React from "react"
import { Link } from "gatsby"
// import Image from "../components/image"

import ringImage92 from "../images/everyday/92.jpg"
import ringImage264 from "../images/unusual/264.jpg"
import ringImagesr1a from "../images/sculpture/sr1a.jpg"




import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />


    <div className="container">
    <div className="row">
   <p>A collection of hand-fabricated rings made by Thomasin Durgin from a variety of metals, gemstones, woods, and other materials. Most of these rings were created in 2010 for <i>Ring a Day</i>, a challenge to create one ring per day for the year. Artists from all over the world participated in Ring a Day, which resulted in a <a href ="https://www.amazon.com/Ring-Day-Photos-Jewelry-Challenge/dp/1600598242" target="_blank">book</a> and a <a href ="http://ringaday2010.blogspot.com/2010/07/etsymetal-ring-day-snag-exhibition.html" target = "_blank">group show</a> at Punch Gallery in Seattle Washington. In 2011, Ms. Durgin had a <a href = "https://www.memphisflyer.com/ExhibitM/archives/2011/09/02/ringing-true" target = "_blank">solo exhibition</a> of many of these rings at the National Ornamental Metal Museum. </p>
    </div>
  <div className="row">
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/everyday/"><img src={ringImage92} alt="Ring 92" class="thumbnail"/></Link>
    </div>
    
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/sculpture/"><img src={ringImagesr1a} alt="Ring sr1a" class="thumbnail"/></Link>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/unusual/"><img src={ringImage264} alt="Ring 264" class="thumbnail"/></Link>
    </div>
  </div>
  <div className="row">
    <div className="col-6 col-md-4 col-lg-3">
    <h6 align="center">Every Day Rings</h6>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <h6 align="center">Rings as Sculpture</h6>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <h6 align="center">Unusual Rings</h6>
    </div>
  </div>
</div>
    





  </Layout>
)

export default IndexPage

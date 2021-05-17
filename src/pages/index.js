import React from "react"
import { Link } from "gatsby"
import ringImager6 from "../images/everyday/r6.jpg"
import ringImage9 from "../images/unusual/9.jpg"
import ringImagesr3 from "../images/sculpture/sr3.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />


    <div className="container">
      <div className="row">
        <div className="col-9">

          <p>A collection of hand-fabricated rings made by Thomasin Durgin from a variety of metals, gemstones, woods, and other materials. Most of these rings were created in 2010 for <i>Ring a Day</i>, a challenge to create one ring per day for the year. Artists from all over the world participated in Ring a Day, which resulted in a <a href="https://www.amazon.com/Ring-Day-Photos-Jewelry-Challenge/dp/1600598242" target="_blank" rel="noreferrer">book</a> and a <a href="http://ringaday2010.blogspot.com/2010/07/etsymetal-ring-day-snag-exhibition.html" target="_blank" rel="noreferrer">group show</a> at Punch Gallery in Seattle Washington. In 2011, Ms. Durgin had a <a href="https://www.memphisflyer.com/ExhibitM/archives/2011/09/02/ringing-true" target="_blank" rel="noreferrer">solo exhibition</a> of many of these rings at the National Ornamental Metal Museum. </p><br></br>

        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/everyday/"><img src={ringImager6} alt="Ring r6" class="thumbnail2" /></Link><br></br>
          <h6>Every Day Rings</h6>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/sculpture/"><img src={ringImagesr3} alt="Ring sr3" class="thumbnail2" /></Link><br></br>
          <h6>Rings as Sculpture</h6>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/unusual/"><img src={ringImage9} alt="Ring 9" class="thumbnail2" /></Link><br></br>
          <h6>Unusual Rings </h6>
        </div>
      </div>
    </div>




  </Layout>
)

export default IndexPage

import React from "react"
// import Image from "../components/image"

import ringImagesr1 from "../images/sculpture/sr1.jpg"
import ringImagesr2 from "../images/sculpture/sr2.jpg"
import ringImagesr3 from "../images/sculpture/sr3.jpg"
import ringImagesr4 from "../images/sculpture/sr4.jpg"
import ringImagesr5 from "../images/sculpture/sr5.jpg"
import ringImagesr6 from "../images/sculpture/sr6.jpg"
import ringImagesr7 from "../images/sculpture/sr7.jpg"



import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const SculpturePage = () => (
  <Layout>
    <SEO title="Rings as Sculpture" />

    <div className="container">
    <div className="row">
    <div className="col">
    <h4 align="center">Rings as Sculpture</h4><br></br>
    </div>
    </div>
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-sr4/"><img src={ringImagesr4} alt="Ring sr4" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-sr2/"><img src={ringImagesr2} alt="Ring sr2" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-sr3/"><img src={ringImagesr3} alt="Ring sr3" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-sr1/"><img src={ringImagesr1} alt="Ring sr1" class="thumbnail" /></Link>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-sr5/"><img src={ringImagesr5} alt="Ring sr5" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-sr6/"><img src={ringImagesr6} alt="Ring sr6" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-sr7/"><img src={ringImagesr7} alt="Ring sr7" class="thumbnail" /></Link>
        </div>

      </div>

    </div>






  </Layout>
)

export default SculpturePage

import React from "react"
import { Link } from "gatsby"
// import Image from "../components/image"

import ringImage8 from "../images/unusual/8.jpg"
import ringImage9 from "../images/unusual/9.jpg"
import ringImage13 from "../images/unusual/13.jpg"
import ringImage24 from "../images/unusual/24.jpg"
import ringImage31 from "../images/unusual/31.jpg"
import ringImage35 from "../images/unusual/35.jpg"
import ringImage53 from "../images/unusual/53.jpg"
import ringImage76 from "../images/unusual/76.jpg"
import ringImage83 from "../images/unusual/83.jpg"
import ringImage100 from "../images/unusual/100.jpg"
import ringImage106 from "../images/unusual/106.jpg"
import ringImage108 from "../images/unusual/108.jpg"
import ringImage221 from "../images/unusual/221.jpg"
import ringImage225 from "../images/unusual/225.jpg"
import ringImage253 from "../images/unusual/253.jpg"
import ringImage264 from "../images/unusual/264.jpg"
import ringImage286 from "../images/unusual/286.jpg"
import ringImage300 from "../images/unusual/300.jpg"
import ringImage304 from "../images/unusual/304.jpg"


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="container">
    <div className="row">
    <div className="col">
    <h4 align="center">Unusual Rings</h4><br></br>
    </div>
    </div>

      <div className="row">
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-24/"><img src={ringImage24} alt="Ring 24" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-35/"><img src={ringImage35} alt="Ring 35" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-53/"><img src={ringImage53} alt="Ring 53" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-76/"><img src={ringImage76} alt="Ring 76" class="thumbnail" /></Link>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-83/"><img src={ringImage83} alt="Ring 83" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-100/"><img src={ringImage100} alt="Ring 100" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-106/"><img src={ringImage106} alt="Ring 106" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-108/"><img src={ringImage108} alt="Ring 108" class="thumbnail" /></Link>
        </div>

      </div>
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-225/"><img src={ringImage225} alt="Ring 225" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-253/"><img src={ringImage253} alt="Ring 253" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-264/"><img src={ringImage264} alt="Ring 264" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-286/"><img src={ringImage286} alt="Ring 286" class="thumbnail" /></Link>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-8/"><img src={ringImage8} alt="Ring 8" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-9/"><img src={ringImage9} alt="Ring 9" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-13/"><img src={ringImage13} alt="Ring 13" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-31/"><img src={ringImage31} alt="Ring 31" class="thumbnail" /></Link>
        </div>

      </div>
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-300/"><img src={ringImage300} alt="Ring 300" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-304/"><img src={ringImage304} alt="Ring 304" class="thumbnail" /></Link>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Link to="/page-221/"><img src={ringImage221} alt="Ring 221" class="thumbnail" /></Link>
        </div>

      </div>
    </div>






  </Layout>
)

export default IndexPage

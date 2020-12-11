import React from "react"
// import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Link } from 'gatsby-plugin-modal-routing'
// import Image from "../components/image"

import ringImage79 from "../images/everyday/79.jpg"
import ringImage92 from "../images/everyday/92.jpg"
import ringImage107 from "../images/everyday/107.jpg"
import ringImage111 from "../images/everyday/111.jpg"
import ringImage119 from "../images/everyday/119.jpg"
import ringImage233 from "../images/everyday/233.jpg"
import ringImage285 from "../images/everyday/285.jpg"
import ringImage365 from "../images/everyday/365.jpg"
import ringImager9 from "../images/everyday/r9.jpg"
import ringImager2 from "../images/everyday/r2.jpg"
import ringImager3 from "../images/everyday/r3.jpg"
import ringImager4 from "../images/everyday/r4.jpg"
import ringImager5 from "../images/everyday/r5.jpg"
import ringImager6 from "../images/everyday/r6.jpg"
import ringImager7 from "../images/everyday/r7.jpg"
import ringImager8 from "../images/everyday/r8.jpg"


import Layout from "../components/layout"
import SEO from "../components/seo"
// import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    


    <div className="container">
  <div className="row">
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-79/" asModal><img src={ringImage79} alt="Ring 79" class="thumbnail"/></Link>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-8/"><img src={ringImage365} alt="Ring 365" class="thumbnail"/></Link>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-8/"><img src={ringImage107} alt="Ring 107" class="thumbnail"/></Link>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-8/"><img src={ringImage111} alt="Ring 111" class="thumbnail"/></Link>
    </div>
  </div>
  <div className="row">
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-8/"><img src={ringImage119} alt="Ring 119" class="thumbnail"/></Link>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-8/"><img src={ringImage233} alt="Ring 233" class="thumbnail"/></Link>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-8/"><img src={ringImage285} alt="Ring 285" class="thumbnail"/></Link>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-8/"><img src={ringImage92} alt="Ring 92" class="thumbnail"/></Link>
    </div>
  </div>
  <div className="row">
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-8/"><img src={ringImager9} alt="Ring r9" class="thumbnail"/></Link>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-8/"><img src={ringImager2} alt="Ring r2" class="thumbnail"/></Link>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-8/"><img src={ringImager3} alt="Ring r3" class="thumbnail"/></Link>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-8/"><img src={ringImager4} alt="Ring r4" class="thumbnail"/></Link>
    </div>
  </div>
  <div className="row">
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-8/"><img src={ringImager5} alt="Ring r5" class="thumbnail"/></Link>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-8/"><img src={ringImager6} alt="Ring r6" class="thumbnail"/></Link>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-8/"><img src={ringImager7} alt="Ring r7" class="thumbnail"/></Link>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <Link to="/page-8/"><img src={ringImager8} alt="Ring r8" class="thumbnail"/></Link>
    </div>
  </div>
</div>
    





  </Layout>
)

export default IndexPage

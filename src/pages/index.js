import React from "react"

// import { Link } from "gatsby"
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
    <div className="col-6 col-md-4 col-lg-3">
    <a href="/page-8/"><img src={ringImage92} alt="Ring 92" class="thumbnail"/></a>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <a href="/page-8/"><img src={ringImage264} alt="Ring 264" class="thumbnail"/></a>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <a href="/page-8/"><img src={ringImagesr1a} alt="Ring sr1a" class="thumbnail"/></a>
    </div>
   
  </div>
</div>
    





  </Layout>
)

export default IndexPage

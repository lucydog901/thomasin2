import React from "react"

// import { Link } from "gatsby"
// import Image from "../components/image"

import ringImage79 from "../images/everyday/79.jpg"


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    


    <div className="container">
  <div className="row">
    <div className="col-6 col-md-4 col-lg-3">
    <a href="/page-8/"><img src={ringImage79} alt="Ring 79" class="thumbnail"/></a>
    </div>
    
  </div>
</div>
    





  </Layout>
)

export default IndexPage

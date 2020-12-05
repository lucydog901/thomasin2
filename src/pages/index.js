import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

import ringImage8 from "../images/8.jpg"
import ringImage9 from "../images/9.jpg"
import ringImage13 from "../images/13.jpg"
import ringImage24 from "../images/24.jpg"
import ringImage31 from "../images/31.jpg"
import ringImage32 from "../images/32.jpg"
import ringImage35 from "../images/35.jpg"
import ringImage47 from "../images/47.jpg"
import ringImage53 from "../images/53.jpg"
import ringImage76 from "../images/76.jpg"
import ringImage79 from "../images/79.jpg"
import ringImage83 from "../images/83.jpg"
import ringImage92 from "../images/92.jpg"
import ringImage100 from "../images/100.jpg"
import ringImage106 from "../images/106.jpg"
import ringImage107 from "../images/107.jpg"
import ringImage108 from "../images/108.jpg"
import ringImage111 from "../images/111.jpg"
import ringImage119 from "../images/119.jpg"
import ringImage156 from "../images/156.jpg"
import ringImage183 from "../images/183.jpg"
import ringImage221 from "../images/221.jpg"
import ringImage225 from "../images/225.jpg"
import ringImage233 from "../images/233.jpg"
import ringImage240 from "../images/240.jpg"
import ringImage253 from "../images/253.jpg"
import ringImage264 from "../images/264.jpg"
import ringImage285 from "../images/285.jpg"
import ringImage286 from "../images/286.jpg"
import ringImage300 from "../images/300.jpg"
import ringImage304b from "../images/304b.jpg"
import ringImage365 from "../images/365.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />


    <div className="container">
  <div className="row">
    <div className="col-sm">
    <a href="/page-8/"><Image src={ringImage8} alt="Ring 8" /></a>
    </div>
    <div className="col-sm">
    <a href="/page-9/"><img src={ringImage9} alt="Ring 9" /></a>
    </div>
    <div className="col-sm">
    <a href="/page-13/"><img src={ringImage13} alt="Ring 13" /></a>
    </div>
    <div className="col-sm">
    <a href="/page-24/"><img src={ringImage24} alt="Ring 24" /></a>
    </div>
  </div>
  <div className="row">
    <div className="col-sm">
    <a href="/page-31/"><img src={ringImage31} alt="Ring 31" /></a>
    </div>
    <div className="col-sm">
    <a href="/page-32/"><img src={ringImage32} alt="Ring 32" /></a>
    </div>
    <div className="col-sm">
    <a href="/page-35/"><img src={ringImage35} alt="Ring 35" /></a>
    </div>
    <div className="col-sm">
    <a href="/page-47/"><img src={ringImage47} alt="Ring 47" /></a>
    </div>
  </div>
  <div className="row">
    <div className="col-sm">
    <img src={ringImage53} alt="Ring 53" />
    </div>
    <div className="col-sm">
    <img src={ringImage76} alt="Ring 76" />
    </div>
    <div className="col-sm">
    <img src={ringImage79} alt="Ring 79" />
    </div>
    <div className="col-sm">
    <img src={ringImage83} alt="Ring 83" />
    </div>
  </div>
  <div className="row">
    <div className="col-sm">
    <img src={ringImage92} alt="Ring 92" />
    </div>
    <div className="col-sm">
    <img src={ringImage100} alt="Ring 100" />
    </div>
    <div className="col-sm">
    <img src={ringImage106} alt="Ring 106" />
    </div>
    <div className="col-sm">
    <img src={ringImage107} alt="Ring 107" />
    </div>
  </div>
  <div className="row">
    <div className="col-sm">
    <img src={ringImage108} alt="Ring 108" />
    </div>
    <div className="col-sm">
    <img src={ringImage111} alt="Ring 111" />
    </div>
    <div className="col-sm">
    <img src={ringImage119} alt="Ring 119" />
    </div>
    <div className="col-sm">
    <img src={ringImage156} alt="Ring 156" />
    </div>
  </div>
  <div className="row">
    <div className="col-sm">
    <img src={ringImage183} alt="Ring 183" />
    </div>
    <div className="col-sm">
    <img src={ringImage221} alt="Ring 221" />
    </div>
    <div className="col-sm">
    <img src={ringImage225} alt="Ring 225" />
    </div>
    <div className="col-sm">
    <img src={ringImage233} alt="Ring 233" />
    </div>
  </div>
  <div className="row">
    <div className="col-sm">
    <img src={ringImage240} alt="Ring 240" />
    </div>
    <div className="col-sm">
    <img src={ringImage253} alt="Ring 253" />
    </div>
    <div className="col-sm">
    <img src={ringImage264} alt="Ring 264" />
    </div>
    <div className="col-sm">
    <img src={ringImage285} alt="Ring 285" />
    </div>
  </div>
  <div className="row">
    <div className="col-sm">
    <img src={ringImage286} alt="Ring 286" />
    </div>
    <div className="col-sm">
    <img src={ringImage300} alt="Ring 300" />
    </div>
    <div className="col-sm">
    <img src={ringImage304b} alt="Ring 304b" />
    </div>
    <div className="col-sm">
    <img src={ringImage365} alt="Ring 365" />
    </div>
  </div>
</div>
    




    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

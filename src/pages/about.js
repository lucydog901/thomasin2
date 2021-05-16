import React from "react"
//import { Link } from "gatsby"
//import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ringImageprofile from "../images/profilebw.png"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />

  
    <div className="container">
    <div className="row">
    <div className="col">
    
   <p>Thomasin Durgin as a visual artist living in Memphis, TN. Ms. Durgin is a former Social Worker and Art Educator making a career change to Web Development. She is currently coding in Javascript using React and Gatsby.  </p>
   <p><b>Projects:</b><br></br>
     T. Durgin: Rings<br></br>
     <a href="https://thomasin-norris.herokuapp.com/" target="blank">Chuck Norris Facts</a></p>
     <p><b>Contact:</b><br></br>
    <a href="mailto:td@thomasin.com">td@thomasin.com</a></p>
    </div>
  <div className="col">
    
    <img src={ringImageprofile} alt="profile picture"/>
    </div>
    </div>
  
    
  
</div>


  </Layout>
)

export default AboutPage

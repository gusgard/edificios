import React from "react"
// import { Link } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import example from "../images/gatsby-astronaut.png"

const keywords = ["edificio", "edificios", "uruguay", "montevideo"]
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={keywords} />
    <h1>Hi people</h1>
    <p>Now go build something great.</p>
    <Carousel infiniteLoop autoPlay swipeable={true}>
      <div>
        <img src={example} alt="example" />
        <p className="legend">example1</p>
      </div>
      <div>
        <img src={example} alt="example" />
        <p className="legend">example1</p>
      </div>
      <div>
        <img src={example} alt="example" />
        <p className="legend">example1</p>
      </div>
    </Carousel>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage

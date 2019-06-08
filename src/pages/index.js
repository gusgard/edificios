import React from "react"
// import { Link } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import photo1 from "../images/_1.jpg"
import photo2 from "../images/_2.jpg"
import photo3 from "../images/_3.jpg"
// import photo4 from "../images/_4.jpg"
import photo5 from "../images/_5.jpg"
import photo6 from "../images/_6.jpg"
import photo7 from "../images/_7.jpg"
import alta1 from "../images/alta_1.jpg"
import alta2 from "../images/alta_2.jpg"
import alta3 from "../images/alta_3.jpg"
import escritorio1 from "../images/escritorio_1.jpg"

const photos = [
  photo1,
  photo2,
  photo3,
  // photo4,
  photo5,
  photo6,
  photo7,
  // alta1,
  // alta2,
  // alta3,
  escritorio1,
]

const keywords = ["edificio", "edificios", "uruguay", "montevideo"]

const styles = {
  container: {
    // flex: 1,
    // display: "flex",
    // flexDirection: "row",
  },
}

const CarouselContainer = ({ list, description, children }) => (
  <div style={styles.container}>
    <Carousel
      infiniteLoop
      autoPlay
      swipeable={true}
      showThumbs={false}
      showStatus={false}
    >
      {list.map((photo, index) => (
        <div key={index}>
          <img src={photo} alt="example" />
          {/* <p className="legend">{index}</p> */}
        </div>
      ))}
    </Carousel>
    {children}
  </div>
)

const plataBajaDescription = `
Planta baja: entrada para camiones, altura 5 metros, 440 metros cuadrados de planta, con 3 baños y vestuario,
entrada de bomberos, entrada de UTE 200 KW, acensor monta carga
`

const piso2Y3 = `
Piso 1, 2 y 3, con 440 metros cuadrados, techo de hormigon, altura de techo 4 metros, tiene 4 baños por piso
`

const altaDescription =
  "Piso 4, con 440 metros cuadrados, techo de chapa galvanizada, altura de techo 3.5 metros y tiene 3 baños con vestuario"

const title = "Edificio en venta en Montevideo, Uruguay"

const subtitle =
  "A dos cuadras de Shopping Trues Cruces, 2200 metros construidos con 4 pisos, precio U$S 2.600.000"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={keywords} />

    <h1>{title}</h1>
    <h2>{subtitle}</h2>

    {/* <h1>Hi people</h1> */}
    {/* <p>Now go build something great.</p> */}
    {/* <div style={styles.container}> */}
    {/* <p>{plataBajaDescription}</p> */}

    <CarouselContainer list={photos}>
      <p>{plataBajaDescription}</p>
      <p>{piso2Y3}</p>
    </CarouselContainer>
    <CarouselContainer list={[alta1, alta2, alta3]}>
      <p>{altaDescription}</p>
    </CarouselContainer>
    {/* </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage

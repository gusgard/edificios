import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import photo1 from "../images/photo1.jpg"
import photo2 from "../images/photo2.jpg"
import photo3 from "../images/photo3.jpg"
import photo5 from "../images/photo5.jpg"
import photo6 from "../images/photo6.jpg"
import photo7 from "../images/photo7.jpg"
import alta1 from "../images/alta_1.jpg"
import alta2 from "../images/alta_2.jpg"
import alta3 from "../images/alta_3.jpg"
import escritorio1 from "../images/escritorio_1.jpg"

const photos = [photo1, photo2, photo3, photo5, photo6, photo7, escritorio1]

const keywords = ["edificio", "edificios", "uruguay", "montevideo"]

const CarouselContainer = ({ list, description, children }) => (
  <>
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
        </div>
      ))}
    </Carousel>
    <div style={{ paddingTop: "0.6rem" }}>{children}</div>
  </>
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
  "A dos cuadras de Shopping Tres Cruces, 2200 metros construidos con 4 pisos, precio U$S 2.600.000"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={keywords} />

    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <h3>
      Telefono: <a href="tel:+59894661256">(+598) 094-661-256</a>
    </h3>

    <CarouselContainer list={photos}>
      <p>{plataBajaDescription}</p>
      <p>{piso2Y3}</p>
    </CarouselContainer>
    <CarouselContainer list={[alta1, alta2, alta3]}>
      <p>{altaDescription}</p>
    </CarouselContainer>
  </Layout>
)

export default IndexPage

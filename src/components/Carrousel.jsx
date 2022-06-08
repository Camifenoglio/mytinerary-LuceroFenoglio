import React from 'react'
import Carousel from 'react-grid-carousel'
import '../styles/App.css'
import ciudades from '../ciudades/ciudades.json'

function Carrousel() {
  return (
    <div className="CarrouselContainer" style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
      <h1 className='tituloCarrousel'>Popular MyTineraries</h1>
      <Carousel cols={2} rows={2} gap={10} autoplay={4000} loop
        mobileBreakpoint={200} responsiveLayout={[
          {
            breakpoint: 768,
            cols: 1,
            rows: 4,
            gap: 10,
            loop: true,
            autoplay: 2000
          }
        ]}>
        {ciudades.map(ciudad =>
          <Carousel.Item key={ciudad.id}>
            <img width="100%" src={ciudad.imagen} alt={ciudad.nombre} style={{ height: "40vh", borderRadius: "30px"}} />
            <p className='nombreCiudad'>{ciudad.nombre}</p>
          </Carousel.Item>)
        }
      </Carousel>
    </div>)

}

export default Carrousel
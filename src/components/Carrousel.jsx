import React from 'react'
import Carousel from 'react-grid-carousel'
import '../styles/index.css' 

const ciudades =
[
    {"nombre": "Tayrona, Colombia",
    "imagen": "https://media-cdn.tripadvisor.com/media/photo-s/0c/6d/e5/14/cabo-san-juan-tayrona.jpg"
    },

    {"nombre": "Cancun, México",
    "imagen": "https://inmobiliare.com/himalaya/wp-content/uploads/2020/05/Quintana-Roo-alista-una-nueva-%E2%80%9CCertificaci%C3%B3n-Sanitaria-Tur%C3%ADstica%E2%80%9D.jpg"
    },

    {"nombre": "Varadero, Cuba",
    "imagen": "https://www.vinosycaminos.com/images/showid2/1726175?w=1200&zc=4"
    },

    {"nombre": "Aruba",
    "imagen": "https://media-cdn.tripadvisor.com/media/photo-s/21/92/35/f4/cabanas-aerial.jpg"
    },

    {"nombre": "Machu Picchu, Peru",
    "imagen": "https://static.hosteltur.com/app/public/uploads/img/articles/2017/07/01/L_5c1a9605f3548_machu-picchuorg-001.jpg"
    },

    {"nombre": "Rio de Janeiro, Brazil",
    "imagen": "https://i0.wp.com/imaginariodejaneiro.com/wp-content/uploads/2018/09/rio-de-janeiro-1963744_1280.jpg?resize=1024%2C682&ssl=1"
    },

    {"nombre": "Villa La Angostura, Argentina",
    "imagen": "https://elcordillerano1.cdn.net.ar/252/elcordillerano/images/69/81/698194_eb5813b73d2eb9e240dd3f5ccf66033de4cf79ce27758bc7dd4090fa734e2a35/md.webp"
    },

    {"nombre": "Pucon, Chile",
    "imagen": "https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/11/25183839/26ad6d6cf8f3ffdab097c874dc1050f4-768x513.jpg"
    },

    {"nombre": "Ibiza, España",
    "imagen": "https://ep01.epimg.net/elviajero/imagenes/2017/03/02/actualidad/1488451186_479605_1488452668_noticia_normal_recorte1.jpg"
    },

    {"nombre": "Amsterdam, Netherlands",
    "imagen": "https://www.clarin.com/img/2021/04/20/un-clasico-de-amsterdam-bicicletas___B6VHq_S5E_1200x630__1.jpg"
    },

    {"nombre": "Positano, Italy",
    "imagen": "https://cdn0.bodas.net/article/3813/3_2/1280/jpg/63183-1.webp"
    },

    {"nombre": "Paris, France",
    "imagen": "https://procolombia.co/sites/default/files/uploads/2021/05/14/prco_web_adaptacion_800x600_paris_francia.jpg"
    },

]

const Carrousel = () => {
  return (
      <div style= {{marginTop: "2rem"}}>
    <Carousel cols={2} rows={2} gap={10} loop>
        {ciudades.map(ciudad =>
      <Carousel.Item>
        <img width="100%" src={ciudad.imagen} style= {{height: "43vh"}} />
        <p className='nombreCiudad'>{ciudad.nombre}</p>
      </Carousel.Item>)
        }
    </Carousel>
    </div>)

}

export default Carrousel
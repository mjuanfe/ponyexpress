import React from "react"
import { graphql, Link } from "gatsby"
import LayoutSections from "../components/layout_sections"

export default function Carta({ data, location }) {
   // console.log(location.pathname);
  return (

    <LayoutSections sectionname='CARTA'>
     
      <p className="carta__mensaje">
        Con el buen tiempo ponemos en marcha nuestra famosa heladería <br></br>
        Explora aquí la gran oferta de <strong>helados</strong> <br></br>
        Como siempre tienes disponible el habitual servicio de <strong>cafetería y bar</strong>. <br></br>
         Pregunta a nuestros camareros!
      </p>
      <ul>
        {
          cartaIndex.map((data, index) => {
          return (<Link to={data.route} key={index}><li>{data.name}</li></Link>)
          })
        }
      </ul>
    </LayoutSections>

  )
};

const cartaIndex = [
  {
    route: '/copas',
    name: 'COPAS'
  },
  {
    route: '/especialidades',
    name: 'ESPECIALIDADES'
  },
  {
    route: '/granizados',
    name: 'GRANIZADOS'
  },
  {
    route: '/copas_simples',
    name: 'COPAS SIMPLES'
  },
  {
    route: '/tarrinas',
    name: 'TARRINAS'
  },
  {
    route: '/cucuruchos',
    name: 'CUCURUCHOS'
  },
  {
    route: '/gofres_crepes_tortitas',
    name: 'GOFRES, CREPES, TORTITAS'
  },
];
/*
  type Sequence {
    items(first: Int): [Item]
  }


  */
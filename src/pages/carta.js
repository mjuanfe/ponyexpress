import React from "react"
import { graphql, Link } from "gatsby"
import LayoutCarta from "../components/layout_carta"

export default function Carta({ data, location }) {
   // console.log(location.pathname);
  return (

    <LayoutCarta sectionname='CARTA'>
     
      <p className="carta__mensaje">
        Con el buen tiempo ponemos en marcha nuestra famosa heladería, <br></br>
        explora aquí la gran oferta de <strong>helados.</strong> <br></br> <br></br>
        Como siempre tienes disponible el habitual servicio de <strong>cafetería y bar</strong>. <br></br>
         Pregunta a nuestros camareros!
      </p>
      <ul className="carta__lista">
        {
          cartaIndex.map((data, index) => {
          return (
            <Link to={data.route} key={index} >
              <li className="carta__itemLista">{data.name}</li>
            </Link>)
          })
        }
      </ul>
    </LayoutCarta>

  )
};

const cartaIndex = [
  {
    route: '/carta_copas',
    name: 'COPAS'
  },
  {
    route: '/carta_especialidades',
    name: 'ESPECIALIDADES'
  },
  {
    route: '/carta_granizados',
    name: 'GRANIZADOS'
  },
  {
    route: '/carta_tarrinas_cucuruchos',
    name: 'TARRINAS Y CUCURUCHOS'
  },
  {
    route: '/carta_gofres_crepes_tortitas',
    name: 'GOFRES, CREPES, TORTITAS'
  },
  {
    route: '/carta_sabores_helado',
    name: 'SABORES HELADO'
  },
];


/*
  type Sequence {
    items(first: Int): [Item]
  }
    {
    route: '/cucuruchos',
    name: 'CUCURUCHOS'
  },
  {
    route: '/copas_simples',
    name: 'COPAS SIMPLES'
  },

  */
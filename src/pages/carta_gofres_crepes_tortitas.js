import React from "react"
import { graphql } from "gatsby"
import LayoutSections from "../components/layout_sections"
import Productos_exp from "../components/productos_exp"
import { getProductsByCategory } from "../components/data_helpers"

export default function ListaCarta5({ data, location }) {
  
  return (
    <LayoutSections sectionname='Gofres, Crepes, Tortitas'>
        <div className="eligeTuSabor">
            <div className="eligeTuSabor__iconos">
              <img className="eligeTuSabor__icono" src={`../../icons/Productos/3x/Gofre_3x.png`} alt="Gofre"/>
              <img className="eligeTuSabor__icono" src={`../../icons/Productos/3x/Crepe_3x.png`} alt="Gofre"/>
              <img className="eligeTuSabor__icono" src={`../../icons/Productos/3x/Tortita_3x.png`} alt="Gofre"/>
            </div>
            <div className="eligeTuSabor__textWrapper">
              <h1 className="eligeTuSabor__titulo">Elige tu sabor!</h1>
              <ul className="eligeTuSabor__lista">
                <li>Chocolate caliente</li>
                <li>Nutella</li>
                <li>Chocolate blanco</li>
                <li>Caramelo</li>
              </ul>
            </div>
        </div>
        <Productos_exp className="gofres_crepes_tortitas" 
        productos={getProductsByCategory(data.allGoogleTarricugofSheet.edges, 'GofreCrepeTortita')}>
        </Productos_exp>
    </LayoutSections>
  )
}


export const query = graphql`
  {
    allGoogleTarricugofSheet(filter: {categoria: {eq: "GofreCrepeTortita"}}) {
      edges {
        node {
          categoria
          nombre
          precio
          nombreImagen
        }
      }
    }
  }
`
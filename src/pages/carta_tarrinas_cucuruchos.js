import React from "react"
import { graphql } from "gatsby"
import LayoutSections from "../components/layout_sections"
import Productos_exp from "../components/productos_exp"
import { getProductsByCategory } from "../components/data_helpers"

export default function ListaCarta4({ data, location }) {

  return (
    <LayoutSections sectionname='Tarrinas y Cucuruchos'>
        <span className="espaciador"></span>
        <span className="espaciador"></span>
        <Productos_exp className="tarrinas"
          productos={getProductsByCategory(data.allGoogleSheetTarricugofRow.edges, 'Helado clásico', 0, 3)}>
        </Productos_exp>
        <span className="espaciador"></span>
        <Productos_exp className="cucuruchos"
          productos={getProductsByCategory(data.allGoogleSheetTarricugofRow.edges, 'Helado clásico', 3, 6)}>
        </Productos_exp> 
        <span className="espaciador"></span>
        <span className="espaciador"></span>
        <Productos_exp className="otros"
          productos={getProductsByCategory(data.allGoogleSheetTarricugofRow.edges, 'Otros')}>
        </Productos_exp> 
        <span className="espaciador espaciador--2"></span>
    </LayoutSections>
  )
}


export const query = graphql`
  {
    allGoogleSheetTarricugofRow {
      edges {
        node {
          categoria
          nombre
          precio
          nombreimagen
        }
      }
    }
  }
`


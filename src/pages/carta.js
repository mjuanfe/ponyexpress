import React from "react"
import { graphql } from "gatsby"
import LayoutSections from "../components/layout_sections"
import Copa from "../components/copa"

export default function ListaCarta({ data, location }) {
  console.log(data);
  return (
    
      <LayoutSections sectionname='CARTA'>
        
        {data.allGoogleSheetCopasRow.edges.map(({ node }, index) => (
          <Copa key={index} node={node}></Copa>
        ))}
      </LayoutSections>
    
  )
}
/*
export const query = graphql`
  {
    allGoogleSheetPrincipalRow {
      edges {
        node {
          precio
          producto
          familia
          descripcion
        }
      }
    }
  }
`*/


export const query = graphql`
  {
    allGoogleSheetCopasRow {
      edges {
        node {
          nombre
          categoria
          descripcion
          precio
          bola1
          bola2
          bola3
          bola4
          bola5
          complemento1
          complemento2
          complemento3
          base
        }
      }
    }
  }
`

//export default CartaTest
/*
  console.log(data);
  console.log(location);


        <h1>Lista cartaa</h1>
        <table>
          <thead>
            <tr>
              <th>familia</th>
              <th>producto</th>
              <th>descripcion</th>
              <th>precio</th>
            </tr>
          </thead>
          <tbody>
            {data.allGoogleSheetPrincipalRow.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.familia}</td>
                <td>{node.producto}</td>
                <td>{node.descripcion}</td>
                <td>{node.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>


  */
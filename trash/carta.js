import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function ListaCarta({ data }) {
  console.log(data)
  return (
    
      <div>
        <h1>Lista carta</h1>
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
      </div>
    
  )
}




export const query = graphql`
query MyQuery {
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
`
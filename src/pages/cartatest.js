import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function ListaCarta({ data }) {
  console.log(data)
  return (
    
      <Layout>
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
      </Layout>
    
  )
}
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
`

//export default CartaTest
import React from "react"
import { graphql } from "gatsby"
import LayoutSections from "../components/layout_sections"
import Copa from "../components/copa"

export default function ListaCarta2({ data, location }) {
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
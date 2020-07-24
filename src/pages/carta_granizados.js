import React from "react"
import { graphql } from "gatsby"
import LayoutSections from "../components/layout_sections"
import Productos from "../components/productos"

export default function ListaCarta3({ data, location }) {
  
  return (
    <LayoutSections sectionname='GRANIZADOS'>
        <Productos categoria='Granizados' productos={getProductsByCategory(data,'Granizados')}></Productos>
    </LayoutSections>
  )
}

function getProductsByCategory(data, categoria){
  var products;
  
  products = data.allGoogleSheetPrincipalRow.edges.filter((product, index) => {
    if(product.node.categoria == categoria){
      //console.log(product.node);
      return product.node
    };
  });
  //console.log(products);
  return products
}


export const query = graphql`
  {
    allGoogleSheetPrincipalRow {
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
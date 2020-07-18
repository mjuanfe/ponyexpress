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
  
  products = data.allCartav1Csv.edges.filter((product, index) => {
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
    allCartav1Csv {
      edges {
        node {
          nombre
          precio
          categoria
          descripcion
          bola1
          bola2
          bola3
          bola4
          bola5
          complemento1
          complemento2
          complemento3
        }
      }
    }
  }
`


/*
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
*/
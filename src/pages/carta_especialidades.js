import React from "react"
import { graphql } from "gatsby"
import LayoutSections from "../components/layout_sections"
import Productos from "../components/productos"
import { getProductsByCategory } from "../components/data_helpers"
import Productos_esp from "../components/productos_esp"

export default function ListaCarta2({ data, location }) {
  
  return (
    <LayoutSections sectionname='ESPECIALIDADES'>
      <h1 className="carta__tituloSubseccion">Pony Express</h1>
        <Productos_esp className='Especialidades' productos={getProductsByCategory(data.allGooglePrincipalSheet.edges, 'Especialidades')}></Productos_esp>
    </LayoutSections>
  )
}
/*
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
*/


export const query = graphql`
  {
    allGooglePrincipalSheet {
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
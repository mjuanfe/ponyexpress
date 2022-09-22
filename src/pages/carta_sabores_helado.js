import React from "react"
import { graphql } from "gatsby"
import LayoutSections from "../components/layout_sections"
import Productos_cremas from "../components/productos_cremas"
import { getProductsByCategory } from "../components/data_helpers"

export default function ListaCarta6({ data, location }) {
  
  return (
    <LayoutSections sectionname='Sabores Helado'>
      <div className="aviso-feria"><strong>Aviso feria 2022 Munera:</strong> Estamos en la recta final de nuestro servicio de heladería, consulta las cremas disponibles, rápido que se agotan!!</div>
        <Productos_cremas className="cremas" productos={data.allGoogleSaboresSheet.edges}></Productos_cremas>
    </LayoutSections>
  )
}

/*
//<Productos categoria='Granizados' productos={getProductsByCategory(data,'Granizados')}></Productos>
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
    allGoogleSaboresSheet {
      edges {
        node {
          nombre
          vegano
          sinAzucar
          novedad
          noDisponible
        }
      }
    }
  }
`
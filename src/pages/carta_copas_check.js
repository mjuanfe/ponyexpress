import React from "react"
import { graphql } from "gatsby"
import LayoutSections from "../components/layout_sections"
import Copa from "../components/copa"
import ProductosCheck from "../components/productos_check"
import { node } from "prop-types"

export default function ListaCarta({ data, location }) {
  
  return (
    <LayoutSections sectionname='COPAS'>
        <h1 className="carta__tituloSubseccion">Las clásicas</h1>
        <ProductosCheck categoria='copas' productos={getProductsByCategory(data,'Copas')}></ProductosCheck>
        <h1 className="carta__tituloSubseccion">Para niños</h1>
        <ProductosCheck categoria='Copas para niños' productos={getProductsByCategory(data,'Copas para niños')}></ProductosCheck>
        <h1 className="carta__tituloSubseccion">Con Alcohol</h1>
        <ProductosCheck categoria='Copas con alcohol' productos={getProductsByCategory(data,'Copas con alcohol')}></ProductosCheck>
        <h1 className="carta__tituloSubseccion">Al gusto</h1>
        <ProductosCheck categoria='Copas simples' productos={getProductsByCategory(data,'Copas simples')}></ProductosCheck>
    </LayoutSections>
  )
}
/*
      {getProductsByCategory(data,'Copas').map(
        (product, index) => {
            return <Copa key={index} node={product.node}></Copa>
          }
        )
      }

*/

function getProductsByCategory(data, categoria){
  var products;
  
  products = data.allGooglePrincipalSheet.edges.filter((product, index) => {
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

/*

    <LayoutSections sectionname='COPAS'>
      {data.allGoogleSheetCopasRow.edges.map(({ node }, index) => (
        <Copa key={index} node={node}></Copa>
      ))}
    </LayoutSections>


===================================================
function getProductsByCategory(data,categories){
  var result;
  categories.map((category, i) => {
    console.log('jfeeee');

    result = data.allGoogleSheetCopasRow.edges.map((node, index) => {
      
      if(node.node.categoria == category){
        console.log(node.node);
        return node.node;
      } else {
        return null;
      }
    });

  });
  console.log(result);
  return result;
};

function getCategories(){

};
*/


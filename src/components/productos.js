import React from 'react';
import Producto from "../components/producto"
//import { graphql } from "gatsby"

const Productos = ({categoria, productos}) => {

    return (
        <div className={categoria}>
            {
                productos.map((producto,index) => {
                    return <Producto key={index} node={producto.node}></Producto>
                })
            }
        </div>
    )
};

export default Productos;


/*
    return (
        <div>

        </div>


    )

        {getProductsByCategory(data, categoria).map(
            (product, index) => {
                return <Copa key={index} node={product.node}></Copa>
              }
            )
          }

      {getProductsByCategory(data,'Copas').map(
        (product, index) => {
            return <Copa key={index} node={product.node}></Copa>
          }
        )
      }


        <div className="copa" key={index}>
            <h1 className="copa__nombre">{node.nombre}</h1>           
            <p className="copa__descripcion">{node.descripcion}</p>
            <div className="copa__piwrapper">               
                <ul className="copa__ingredientes">
                    <Copa_ingrediente ingrediente={node.bola1}></Copa_ingrediente>
                    <Copa_ingrediente ingrediente={node.bola2}></Copa_ingrediente>
                    <Copa_ingrediente ingrediente={node.bola3}></Copa_ingrediente>
                    <Copa_ingrediente ingrediente={node.bola4}></Copa_ingrediente>
                    <Copa_ingrediente ingrediente={node.bola5}></Copa_ingrediente>
                </ul>
                <ul className="copa__ingredientes">
                    <Copa_ingrediente ingrediente={node.complemento1}></Copa_ingrediente>
                    <Copa_ingrediente ingrediente={node.complemento2}></Copa_ingrediente>
                    <Copa_ingrediente ingrediente={node.complemento3}></Copa_ingrediente>
                </ul>
                <Copa_precio precio={node.precio}></Copa_precio>
                
            </div>
        </div>



*/
/*
function getProductsByCategory(data, categoria){
    var products;
    
    products = data.allGoogleSheetCopasRow.edges.filter((product, index) => {
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
import React from 'react';
//import { graphql } from "gatsby"
import Producto_crema from "./producto_crema"

const Productos_cremas = ({className, productos}) => {
    //console.log(productos)dd;
    return (
        <div className={className}>
            {
                productos.map((producto,index) => {
                    if(producto.node.nodisponible != 'x'){
                        return (
                            <Producto_crema producto={producto} 
                            etiquetas={
                                [
                                    {
                                        nodisponible: producto.node.nodisponible != null ?  "No disponible" : null ,
                                        //texto: "No disponible"
                                    },
                                    {
                                        sinazucar: producto.node.sinazucar != null ?  "Sin azúcar" : null ,
                                        //texto: "Sin azucar"
                                    },
                                    {
                                        vegano: producto.node.vegano != null ?  "Vegano" : null ,
                                        //texto: "Vegano"
                                    },
                                    {
                                        novedad: producto.node.novedad != null ?  "Novedad" : null ,
                                        //texto: "Novedad"
                                    }  
                                    
                                    //producto.node.nodisponible, producto.node.sinazucar, producto.node.vegano
                                ]
                            }></Producto_crema>
                        )
                    }

                })
            }
        </div>
    )
};



/*


const Productos_cremas = ({className, productos}) => {
    //console.log(productos);
    return (
        <div className={className}>
            {
                productos.map((producto,index) => {
                    if (producto.node.nodisponible != null ) {
                        return null
                    }
                    else if (producto.node.sinazucar != null || producto.node.vegano != null ){
                        if (producto.node.sinazucar != null && producto.node.vegano == null){
                           return  <Producto_crema producto={producto} etiquetas="Sin azucarr"></Producto_crema>
                        }
                    }
                    return (
                        <Producto_crema producto={producto} etiquetas=""></Producto_crema>
                    )
                })
            }
        </div>
    )
};

*/


export default Productos_cremas;

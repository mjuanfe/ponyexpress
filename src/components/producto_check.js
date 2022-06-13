import React from 'react';
import Producto_ingrediente from './producto_ingrediente';
import Producto_precio from './producto_precio';

const ProductoCheck = ({node, index}) => {
    return (
        <div className="productocheck" key={index}>
            <h1 className="productocheck__nombre">{node.nombre}</h1>           
            <p className="productocheck__descripcion">{node.descripcion}</p>
            <div className="productocheck__piwrapper">               
                <ul className="productocheck__ingredientes">
                    <Producto_ingrediente ingrediente={node.bola1}></Producto_ingrediente>
                    <Producto_ingrediente ingrediente={node.bola2}></Producto_ingrediente>
                    <Producto_ingrediente ingrediente={node.bola3}></Producto_ingrediente>
                    <Producto_ingrediente ingrediente={node.bola4}></Producto_ingrediente>
                    <Producto_ingrediente ingrediente={node.bola5}></Producto_ingrediente>
                </ul>
                <ul className="producto__ingredientes">
                    <Producto_ingrediente ingrediente={node.complemento1}></Producto_ingrediente>
                    <Producto_ingrediente ingrediente={node.complemento2}></Producto_ingrediente>
                    <Producto_ingrediente ingrediente={node.complemento3}></Producto_ingrediente>
                </ul>
                <Producto_precio precio={node.precio}></Producto_precio>
                
            </div>
        </div>
    );
};

export default ProductoCheck;
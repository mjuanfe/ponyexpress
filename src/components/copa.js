import React from 'react';
import Copa_ingrediente from './copa_ingrediente';
import Copa_precio from './copa_precio';

const Copa = ({node, index}) => {
    return (
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
    );
};

export default Copa;

/*

        <Copa_ingrediente ingrediente={node.bola1}></Copa_ingrediente>
        <Copa_ingrediente ingrediente={node.bola2}></Copa_ingrediente>
        <Copa_ingrediente ingrediente={node.bola3}></Copa_ingrediente>
        <Copa_ingrediente ingrediente={node.bola4}></Copa_ingrediente>
        <Copa_ingrediente ingrediente={node.bola5}></Copa_ingrediente>
        <Copa_ingrediente ingrediente={node.complemento1}></Copa_ingrediente>
        <Copa_ingrediente ingrediente={node.complemento2}></Copa_ingrediente>
        <Copa_ingrediente ingrediente={node.complemento3}></Copa_ingrediente>

<h6 className="copa__categoria">{node.categoria}</h6>

*/
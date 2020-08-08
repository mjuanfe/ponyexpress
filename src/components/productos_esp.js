import React from 'react';
import Producto_precio from './producto_precio';

const Productos_esp = ({productos, className}) => {
    console.log(productos);
    return (
        <div className={className}>
            {
                productos.map((producto,index) => {
                    return (
                        <div key={index} className="productoEsp">
                            <div className="productoEsp__iconoWrapper">
                                <img className="productoBig__icono"
                                src={`../../Icons/Productos/3x/${producto.nombre}_p.png`} alt="icono producto"/>
                            </div>
                            <div className="productoEsp__texto">
                                <li className="productoEsp__nombre">
                                    {producto.nombre}
                                </li>
                                <p className="productoEsp__descipcion">{producto.descripcion}</p>
                            </div>
                            <div className="productoEsp__precioWrapper">
                            <Producto_precio precio={producto.precio}></Producto_precio>
                            </div>                            
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Productos_esp;

// min-width: 42px;
//dangerouslySetInnerHTML={{__html: producto.nombre}}
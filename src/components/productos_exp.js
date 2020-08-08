import React from 'react';
import Producto_precio from './producto_precio';


const Productos_exp = ({className, productos}) => {

    function handleClass(productoNombre){
        //This function is conditionates the css based on the name of the product
        if(productoNombre === 'Grande') return 'productoBig_icono productoBig_icono--grande'
        else if (productoNombre === 'Cucurucho' || 
                 productoNombre === 'Cucurucho<br>dos bolas' ||
                 productoNombre === 'Cucurucho<br>Turrón<br>Artesano') {
            return 'productoBig_icono productoBig_icono--grandeCucu'
        }
        else if (productoNombre === 'Un Sabor' ||
                 productoNombre === 'Sabor+<br>Nata' ||
                 productoNombre === 'Sabor+<br>Nata+<br>Helado') {
                     return 'productoBig_icono productoBig_icono--dulce'
                 }
        else return 'productoBig_icono'
    }
//  producto.node.nombre __html: producto.node.nombre
//  <p className="productoBig__precio">{producto.node.precio}</p>
    return (
        <div className={className}>
            {
                productos.map((producto,index) => {
                    return (
                        <div key={index} className="productoBig">
                            <div className="productoBig_iconoWrapper">
                                <img className={handleClass(producto.nombre)}
                                src={`../../icons/Productos/3x/${producto.nombreimagen}_3x.png`} alt="icono producto"/>
                            </div>
                            <li className="productoBig__nombre"
                            dangerouslySetInnerHTML={{__html: producto.nombre}}>
                            </li>
                            <Producto_precio precio={producto.precio}></Producto_precio>                            
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Productos_exp;

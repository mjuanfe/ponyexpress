import React from 'react';

const Producto_crema = ({producto, etiquetas}) => {
    //console.log(etiquetas);
    return (
    <div className="productoCrema">
        <img className="productoCrema__icono" src={`../../icons/2x/${producto.node.nombre}_2x.png`} alt="icono producto"/>
        <div className="productoCrema__texto">
            <h1 className="productoCrema__nombre">{producto.node.nombre}</h1>
            <ul className="productoCrema__etiquetas">
            {
                etiquetas.map((etiqueta,i) => {
                    for (const prop in etiqueta) {
                        if (etiqueta[prop] != null) return (
                            <li className={`productoCrema__etiqueta productoCrema__etiqueta--${prop}`}>
                                {etiqueta[prop]}
                                </li>
                        )
                    }
                })
            }
            </ul>
        </div>
    </div>
    );
};


/*"productoCrema__etiqueta"
                console.log(value.sinazucar);
                if (value.sinazucar == true && value.vegano == false) return <li>{value.texto}</li>
                else if (value.sinazucar == false && value.vegano != true) return <li>{value.texto}</li>


        {etiquetas.map((value,i) => {
            return <li key={i}>{value}</li>
        })}
        
*/
export default Producto_crema;
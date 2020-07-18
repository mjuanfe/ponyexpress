import React from 'react';

const Producto_precio = ({precio}) => {
    //console.log(precio);
    if(precio != null){
        return (
            <div className="copa__precio">
                {precio}
                <span className="copa__precioComa"></span>
                <span className="copa__precioMoneda">€</span>
            </div>
        );
    } else if(precio[0] != null){
        //console.log(precio);
        const [concoma, sincoma] = /(.*)\,/.exec(precio);
        //console.log(concoma);
        return (
            <div className="copa__precio">
                {sincoma}
                <span className="copa__precioComa"></span>
                <span className="copa__precioMoneda">€</span>
            </div>
        );
    } else {
        return null;
    }
};

export default Producto_precio;
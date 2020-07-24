import React from 'react';

const Producto_precio = ({precio}) => {
    console.log(precio);
    if(precio[0] != null){
        //console.log(/(.*)\,/.exec(precio));
        console.log(/\,(\d)/.exec(precio)); //decimales  /\,(\d+)\€/
        const [decimalescoma, decimalessincoma] = /\,(\d)/.exec(precio);
        const [concoma, sincoma] = /(.*)\,/.exec(precio);

        console.log(decimalessincoma);
        return (
            <div className="producto__precio">
                {sincoma}
                <span className="producto__precioComa">{
                    `${decimalessincoma == "0" ? "" : "' "+decimalessincoma}`
                }</span>
                <span className="producto__precioMoneda">€</span>
            </div>
        );
    } else {
        return null;
    }
};

export default Producto_precio;
import React from 'react';

const Copa_precio = ({precio}) => {
    console.log(precio);
    const [concoma, sincoma] = /(.*)\,/.exec(precio);
    console.log(concoma);
    return (
        <div className="copa__precio">
            {sincoma}
            <span className="copa__precioComa"></span>
            <span className="copa__precioMoneda">€</span>
        </div>
    );
};

export default Copa_precio;
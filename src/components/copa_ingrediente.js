import React from 'react';
import Café from "../icons/SVG/Café.svg";

const Copa_ingrediente = ({ingrediente}) => {
    if(ingrediente != null){
        return(
            <li className='copa__ingrediente'>
                <img className='copa__bola-ingrediente' src={`../../icons/svg/${ingrediente}.svg`} alt="Ingrediente" />
                <p className='copa__texto-ingrediente'>{ingrediente}</p>
            </li>
        )

    }
    else {
        return null;
    }
};

export default Copa_ingrediente;

/* 

<Café className='copa__bola-ingrediente'></Café>

*/
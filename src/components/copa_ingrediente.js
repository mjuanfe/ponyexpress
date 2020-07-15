import React from 'react';

const Copa_ingrediente = ({ingrediente}) => {
    if(ingrediente != null){
        return(
            <li className='copa__ingrediente'>
                <img className='copa__bola-ingrediente' src={`../../icons/2x/${ingrediente}_2x.png`} alt="Ingrediente" />
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
import React from 'react';
import { dom } from 'react-dom';

const Testcomponent = ({props}) => {
    return (
        <div>
            <h6>component</h6>
            <h3>{props.name}</h3>
        </div>
    );
};

export default Testcomponent;
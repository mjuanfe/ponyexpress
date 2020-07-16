
import React, { Component } from 'react';
import Navigation from './navigation'

const LayoutCarta = ({children, sectionname}) => {
    return (
        <div className='layoutSections'>
            <Navigation sectionname={sectionname} urlBack='/'></Navigation>
            <main>{children}</main>
        </div>
    );
};


export default LayoutCarta;
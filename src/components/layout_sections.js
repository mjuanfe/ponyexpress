
import React, { Component } from 'react';
import Navigation from './navigation'

const LayoutSections = ({children, sectionname}) => {
    return (
        <div className='layoutSections'>
            <Navigation sectionname={sectionname}></Navigation>
            <main>{children}</main>
        </div>
    );
};


/*


{props.sectionname}
class LayoutSections extends Component {
    render() {
        return (
            <div>
                <Navbar sectionname={this.props.sectionname}></Navbar>
                <main>{this.props.children}</main>
            </div>
        );
    }
}
*/  
export default LayoutSections;
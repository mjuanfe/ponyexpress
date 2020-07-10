import React, { Component } from 'react';
//import Testcomponent from '../components/testcomponent';

class test extends Component {
    render() {
        return (
            <div>
                hola
                <Welcome name="jajj"></Welcome>
            </div>
        );
    }
}

export default test;
/*
const Testcomponent = ({props}) => {
    return (
        <div>
            <h6>component</h6>
            <h3>{props.name}</h3>
        </div>
    );
};
*/

class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
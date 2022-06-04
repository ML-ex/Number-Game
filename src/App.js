import React from "react";
import { hot } from 'react-hot-loader/root';
import Homepage from './homepage/Homepage.js';
import "./style.css";


class App extends React.Component {
   
    render() {

        return ( 
        <div className="container">
        < Homepage/> 
        </div>
        )
        
    }
}

export default hot(App);

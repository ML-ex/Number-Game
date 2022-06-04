import React from "react";
import { hot } from 'react-hot-loader/root';
import Homepage from './homepage/Homepage.js';

class App extends React.Component {
    render() {

        return ( < Homepage / > );
    }
}

export default hot(App);
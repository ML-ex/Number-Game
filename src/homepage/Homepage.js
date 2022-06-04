import React from "react";
import Rules from "./Rules.js";
import Results from "./Results.js";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../style.css";


class Homepage extends React.Component {
    
    render() {
        //const { name } = this.props;
        return ( 
            <>
            <h1 class="card-header" style={{color:"red"}}>
            Guess the Number
            </h1 >
            <div className = "card-body">
            <Rules/>
            <Results/>
            </div>         
            </>
        );
    }
}

export default Homepage;


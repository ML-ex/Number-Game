import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import Rules from "./Rules.js";
import Results from "./Results.js";
import Game from "./Game.js";


class Homepage extends React.Component {
    render() {
        const cardStyle = {
            height: "700px",
            backgroundColor: "#83D9DE",
            padding: "10px",
            fontFamily: "Sans-Serif",
            fontSize: "14px",
            width: "950px",
            margin: "0 auto",
            marginTop: "20px"

        };
        return ( <
            >
            <
            div className = "card"
            style = { cardStyle } >
            <
            h1 style = {
                { color: "red", textAlign: "center", letterSpacing: "0.13em " }
            } > Guess the Number < /h1 >  <Rules / > < Results / > < Game / > <
            /div>             < / >
        );
    }
}

export default Homepage;
import React from "react";


class Game extends React.Component {

    render() {

        const { name } = this.props;
        const cardStyle = {
            backgroundColor: "#83D9DE",
            padding: "10px",
            fontFamily: "Sans-Serif",
            fontSize: "14px",
            fontStyle: "italic",
            width: "500px",
            height: "200px",
            margin: "0 auto",
            marginTop: "30px",
            lineHeight: "25px",

        };
        return ( <
            >
            <
            div className = "card"
            style = { cardStyle } >
            <
            h2 style = {
                { textAlign: "center", letterSpacing: "0.12em " }
            } > Give It A Try Below < /h2> <br/ > <
            form className = "form-inline"
            style = {
                { marginLeft: "50px" }
            }
            onSubmit = { this.checkGuess } >
            <
            label className > Enter a guess:
            <
            input type = "text"
            name = "name" / >
            <
            /label>  <
            label >
            <
            input type = "submit"
            ref = {
                (button) => { this.submitGuess = button; }
            }
            className = "btn btn-primary m-2" / >
            <
            /label>  <
            label >
            <
            input type = "text"
            name = "name"
            placeholder = "CORRECT GUESS"
            style = {
                { textAlign: "center", letterSpacing: "0.16em ", width: "360px" }
            }
            />  < /
            label >

            <
            div class = "btn"
            style = {
                { padding: "20px 0 0 0" }
            } >
            <
            button type = "button"
            class = "btn-success"
            style = {
                { marginLeft: "60px" }
            } > PLAY AGAIN < /button> <
            button type = "button"
            class = "btn-danger"
            style = {
                { marginLeft: "60px" }
            } > EXIT GAME < /button>  < /
            div > <
            /form > < /
            div > < / >
        );
    }
}

export default Game;

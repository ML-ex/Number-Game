import React from "react";

class Rules extends React.Component {
    render() {

        const { list } = this.props;
        const cardStyle = {
            color: "black",
            backgroundColor: "#83D9DE",
            padding: "10px",
            fontFamily: "Sans-Serif",
            lineHeight: "26px",
            width: "600px",
            marginLeft: "15px"
        };
        return ( <
            >
            <
            div className = "card"
            style = { cardStyle } >

            <
            ol >
            <
            h1 > How to Play < /h1>  <
            li > A random number is generated by the computer < /li>  <
            li > You only have 3 chances to guess the number and beat the computer. < /li>  <
            li > Don’ t worry, the computer will
            let you know
            if your guess was higher or lower than the random number. < /li> < /
            ol > <
            h2 > Do you have what it takes to win ? < /h2>  <
            span > Use the register button below to create an account so you can save your progress or log in
            if you already have one. < /span> 


            <
            div class = "btn" >
            <
            button type = "button"
            class = "btn-success"
            style = {
                { marginRight: "120px" }
            } > Register < /button> <
            button type = "button"
            class = "btn-primary" > Log In < /button> < /
            div > <
            /div>     </ >

        );
    }
}

export default Rules;
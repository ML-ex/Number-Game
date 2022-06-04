import React from "react";

class Results extends React.Component {
    render() {

        const { name } = this.props;

        const cardStyle = {
            color: "black",
            backgroundColor: "#75C3C8",
            padding: "10px",
            marginLeft: "650px",
            marginTop: "-275px",
            lineHeight: "30px",
            width: "250px",
            height: "275px"
        };
        return ( <
            >
            <
            div className = "card"
            style = { cardStyle } >
            <
            form >
            <
            label > Games Won: < input type = "text"
            name = "name" / > < /label>  <
            label > Games Lost: < input type = "text"
            name = "name" / > < /label>  <
            label > Total Games Played:
            <
            input type = "text"
            name = "name" / > < /label>  <
            /form>

            <
            /div> </ >

        );
    }
}

export default Results;
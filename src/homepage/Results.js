import React from "react";

class Results extends React.Component {
    render() {

        const { name } = this.props;
        return ( 
            <>
             <form>
                <label>
                Games Won:
                <input type="text" name="name" />
                </label>
                <label>
                Games Lost:
                    <input type="text" name="name" />
                </label>
                <label>
                Total Games Played:
                    <input type="text" name="name" />
                </label>
            </form>
            </>
        );
    }
}

export default Results;

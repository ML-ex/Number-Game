import React from "react";

class Game extends React.Component {
    render() {

        const { name } = this.props;
        return ( 
            <>
            <h2>Play the Game here</h2>
             <form>
                <label>
                <input type="text" name="name" />
                Guess:
                </label>
                <label>
                    <input type="text" name="name" />
                </label>
                <button
                    type='button'>
                        PLAY AGAIN
                        </button>
                        <button
                    type='button'>
                        EXIT
                        </button>
            </form>
            </>
        );
    }
}

export default Game;

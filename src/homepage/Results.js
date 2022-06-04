import React from "react";
import Game from '../homepage/Game.js';

class Results extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            gameKey: true
        };

        this.newGame = this.newGame.bind(this);
    }

    newGame(){
        this.setState((prevState) => ({
            gameKey: !prevState.gameKey
        }));
    }
    render() {
       
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
            <Game key={this.state.gameKey} newGame={this.newGame}/>
            </>
        );
    }
}

export default Results;

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
            <Game key={this.state.gameKey} newGame={this.newGame}/>
        );
    }
}

export default Results;

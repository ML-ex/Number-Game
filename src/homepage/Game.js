import React, { Component } from 'react';

class Game extends Component {

    constructor(props){
        super(props);
        this.state = {
            randomNumber: Math.floor(Math.random() *100) + 1 + "",
            guesses: "",
            lastResult: "",
            lowOrHi: "",
            guessCount: 1,
            classLastResult: "",
            classButtonNewGame: 'd-none'
        };

        this.checkGuess = this.checkGuess.bind(this);
    }

    componentDidMount(){
        this.guessNumber.focus();
    }

    componentDidUpdate(){
        if(this.state.classButtonNewGame === "btn btn-primary m-2"){
            this.startNewGame.focus();
        }
    }

    checkGuess(event){
        event.preventDefault();
        let guessValue = event.target.guessNumber.value;
        let randomValue = this.state.randomNumber;
        event.target.guessNumber.value = "";

        if(guessValue !== "") {
            this.setState((prevState) => ({
                guesses: prevState.guesses === "" ? `Previous guesses: ${guessValue}` : `${prevState.guesses}, ${guessValue}`,
                guessCount: prevState.guessCount + 1
            }));
            if (guessValue === randomValue) {
                this.setState({
                    lastResult: "Good Job,You got it correct!",
                    lowOrHi: "",
                    classLastResult: "m-2 p-1 bg-success",
                    classButtonNewGame: "btn btn-primary m-2"
                });

                this.submitGuess.setAttribute("disabled", "disabled");
                this.guessNumber.setAttribute("disabled", "disabled");

            } else if (this.state.guessCount === 3) {
                this.setState({
                    lastResult: "GAME OVER!",
                    lowOrHi: "",
                    classLastResult: "m-2 p-1 bg-danger",
                    classButtonNewGame: "btn btn-primary m-2"
                });

                this.submitGuess.setAttribute("disabled", "disabled");
                this.guessNumber.setAttribute("disabled", "disabled");


            } else if (guessValue > randomValue) {
                this.setState({
                    lastResult: "Wrong!",
                    lowOrHi: "Last guess was too high!",
                    classLastResult: "m-2 p-1 bg-danger"
                });
            } else if (guessValue < randomValue) {
                this.setState({
                    lastResult: "Wrong!",
                    lowOrHi: "Last guess was too low!",
                    classLastResult: "m-2 p-1 bg-danger"
                })
            } 

        }
    }

    render(){
        return(
            <div>
                <form className="form-inline" onSubmit={this.checkGuess}>
                        <h3 className="m-2">Give It A Try Below:</h3>
                        <input name="guessNumber" type="number" min="1" max="100" ref={(input) => {this.guessNumber = input;}} className="form-control m-2"/>
                        <button type="submit" ref={(button) => {this.submitGuess = button;}} className="btn btn-primary m-2">GUESS!</button>
                </form>
                <div>
                    <p className="m-2">{this.state.guesses}</p>
                    <p className={this.state.classLastResult}>{this.state.lastResult}</p>
                    <p className="m-2">{this.state.lowOrHi}</p>
                    <button ref={(button) => {this.startNewGame = button;}} className={this.state.classButtonNewGame} onClick={this.props.newGame}>Play Again</button>
                </div>
            </div>
        );
    }
}

export default Game;
import React, { Component } from 'react';
import './App.css';
import Score from './components/Score.js';
import GameOver from './components/GameOver.js';
import StartButton from './components/StartButton.js';
import Moles from './components/Moles.js';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    
    this.state = {
      1:'translate(0, 100%)',
      2:'translate(0, 100%)',
      3:'translate(0, 100%)',
      4:'translate(0, 100%)',
      5:'translate(0, 100%)',
      6:'translate(0, 100%)',
      7:'translate(0, 100%)',
      8:'translate(0, 100%)',
      9:'translate(0, 100%)',
      moleWhacked: false,
      score: 0,
      lastMole: '',
      display: 'none',
      buttonMessage: 'Start Game',
      gameOver: 'none',
      buttonDisplay: 'inline-block',
      velocity: 900,
      players: [{
        name: 'Anonymus',
        scorePlayer: 0
      }]
    };
  }

  timeOut(){
    this.setState({
      buttonDisplay: 'none',
      display: 'block',
      gameOver: 'none',
      titleMargin: 0
    });
    window.setTimeout(() => {
      this.startGame();
    });
  }

  startGame(){

    this.setState({
      score: 0
    });

    let counter = 0;
    const intervalID = setInterval(() => {
      this.displayMoles();
      if (++counter === 35) {
        window.clearInterval(intervalID);
        this.clearMoles();
        window.setTimeout(() => {
          if(this.state.score >= 5){
            this.setState({
              display: 'none',
              gameOver: 'block',
              buttonMessage: 'Next Level',
              buttonDisplay: 'inline-block',
              velocity: this.state.velocity - 100
            });
          }
          else{
            this.setState({
              display: 'none',
              gameOver: 'block',
              buttonMessage: 'Play again',
              buttonDisplay: 'inline-block',
              velocity: 900
            });
          }
        }, 850)
      }
    }, this.state.velocity);
  }

  clearMoles(){
    for(let value in this.state){
      if (!isNaN(value)){
        this.setState({
          [value]: 'translate(0, 100%)'
        });
      }
    }
  }

  displayMoles(){
    let activeMole = Math.ceil(Math.random() * 9);
    if (this.state.lastMole[0] === activeMole){
      this.displayMoles();
      return;
    }
    this.clearMoles();
    this.setState({
      [activeMole]: 'translate(0, 15%)',
      lastMole: [activeMole]
    });
  }

 lockOutClick(){
    window.setTimeout(() => {
      this.setState({ moleWhacked: false })
    }, 350)
  }

  addToScore(key){
    let target = key.target;
    target.parentNode.classList.add('game__hit');
    target.classList.add('no-background');
    this.lockOutClick();
    this.setState({
      background: '75px',
      moleWhacked: true,
      score: [parseInt(this.state.score, 10) + 1]
    });
    window.setTimeout(function(){
      target.parentNode.classList.remove('game__hit');
      target.classList.remove('no-background');
    }, 400)
  }

  createMoleHoles(){
    var holes = [];
    for(let index = 1; index <= 9; index++){
      holes.push(<Moles key={ index } context={ this.state }
        onClick={ this.addToScore.bind(this) } holeNumber={ index } />
      );
    }
    return (
      <div className="board">
        { holes }
      </div>
    );
  }
  onAddPlayer (name) {
    this.state.players.push({ name: name, score: 0 });
  };

  render() {
    return (
      <div className="container">
        <div className="game" >
          <h1 className="game__title" >WHACK-A-MOLE</h1>
          <GameOver context={ this }/>
          <div ref={ 'gameOver' } className="game__button">
            <StartButton context={ this.state } onClick={ this.timeOut.bind(this) }/>
          </div>
          { this.createMoleHoles() }
          <Score context={ this.state }/>
        </div>
      </div>
    );
  }
}

export default App;

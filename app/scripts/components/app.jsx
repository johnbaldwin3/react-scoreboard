import React from 'react';
import PropTypes from 'prop-types';




const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.incrementScore = this.incrementScore.bind(this);

    this.state = {
      score: 0,
    }
  }
  incrementScore(e) {
    //console.log("event", e);
  }
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score"> {this.state.score}</div>
        <button onClick={this.incrementScore} className="counter-action increment"> + </button>
      </div>
    )
  }
}

Counter.propTypes = {

}

const Player = (props) => {
  return (
    <div className="player">
      <div className="player-name">{props.name}</div>
      <div className="player-score">
        <Counter />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
}



const Application = (props) => {
  return (
    <div className="scoreboard">
      <Header title={props.title} />
      <div className="players">
        {props.players.map((player) => {
          return (<Player key={player.id} name={player.name} score={player.score} />
          );
        })}
      </div>
    </div>
  )
}

Application.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired,
}

Application.defaultProps = {
  title: "Scoreboard",
}

export default Application;

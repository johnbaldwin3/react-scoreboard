//3rd party libraries
import React from 'react';
import PropTypes from 'prop-types';

//Components
import Stopwatch from '../components/Stopwatch.jsx';
import Stats from '../components/Stats.jsx';
import Counter from '../components/Counter.jsx';
import AddPlayerForm from '../components/AddPlayerForm.jsx';
import Player from '../components/Player.jsx';
import Header from '../components/Header.jsx';

//import PLAYERS from '../models/players.js'

//id counter
let nextId = 5;

export default class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.onScoreChange = this.onScoreChange.bind(this);
    this.onPlayerAdd = this.onPlayerAdd.bind(this);
    this.onRemovePlayer = this.onRemovePlayer.bind(this);

    this.state = {
      players: [
        {
          name: "John Baldwin",
          score: 31,
          id: 1
        },
        {
          name: "Nicki Baldwin",
          score: 33,
          id: 2
        },
        {
          name: "Albus Dumbledore",
          score: 43,
          id: 3
        },
        {
          name: "Bruce Wayne",
          score: 25,
          id: 4
        },
      ]
    }
  }
  onScoreChange(index, onChange) {
    //console.log(onChange, 'onScoreChange', 'index', index);
    this.state.players[index].score += onChange;
    this.setState(this.state);
  }
  onPlayerAdd(name) {
    //console.log('player added', name);
    this.state.players.push({
      name: name,
      score: 0,
      id: nextId, });
      nextId += 1;
      this.setState(this.state);
  }
  onRemovePlayer(index) {
    //console.log('remove', index);
    this.state.players.splice(index, 1);
    this.setState(this.state);
  }
  render() {
    return (
      <div className="scoreboard">
         <Header title={this.props.title} players={this.state.players} />
         <div className="players">
           {this.state.players.map((player, index) => {
             return (
               <Player
                  onRemove={()=> {this.onRemovePlayer(index)}}
                  onScoreChange={ (onChange) => {this.onScoreChange(index, onChange)} }
                  key={player.id}
                  name={player.name}
                  score={player.score} />
             );
           })}
         </div>
         <AddPlayerForm onAdd={this.onPlayerAdd}/>
       </div>
    )
  }
}


Scoreboard.propTypes = {
  title: PropTypes.string,
}

Scoreboard.defaultProps = {
  title: "Scoreboard",
}

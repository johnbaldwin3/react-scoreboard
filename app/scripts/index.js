import React from 'react';
import ReactDOM from 'react-dom';

//components and models
import Scoreboard from './containers/Scoreboard.jsx';
import PLAYERS from './models/players.js'

//import Application from './components/app.jsx';

ReactDOM.render(
  <Scoreboard />,
  document.getElementById('container')
);

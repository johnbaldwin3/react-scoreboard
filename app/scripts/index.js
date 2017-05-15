import React from 'react';
import ReactDOM from 'react-dom';

let PLAYERS = [ {
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
}
];

import Application from './components/app.jsx';

ReactDOM.render(
  <Application players={PLAYERS} />,
  document.getElementById('container')
);

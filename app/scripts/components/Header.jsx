//3rd party libraries 
import React from 'react';
import PropTypes from 'prop-types';

//Components
import Stopwatch from './Stopwatch.jsx';
import Stats from './Stats.jsx';

const Header = (props) => {
  return (
    <div className="header">
      <Stats players={props.players}/>
      <h1>{props.title}</h1>
      <Stopwatch />
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
}

export default Header;

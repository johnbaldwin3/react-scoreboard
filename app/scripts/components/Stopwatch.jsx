import React from 'react';
import PropTypes from 'prop-types';

export default class Stopwatch extends React.Component {
  constructor(props){
    super(props);

    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onTick = this.onTick.bind(this);

    this.state = {
      running: false,
      elapsedTime: 0,
      previousTime: 0,
    }
  }
  componentDidMount() {
    this.interval = setInterval(this.onTick, 100);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onTick() {
    //console.log('onTick');
    if (this.state.running) {
      let now = Date.now();
      this.setState({
        previousTime: now,
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),

      });
    }
  }
  onStart() {
    this.setState({
      running: true,
      previousTime: Date.now(),
    });

  }
  onStop() {
    this.setState({running: false});
  }
  onReset() {
    this.setState({
      elapsedTime: 0,
      previousTime: Date.now(),
    });

  }
  render() {
    let seconds = Math.floor(this.state.elapsedTime / 1000);
    return(
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <div className="stopwatch-time">{seconds}</div>
        {this.state.running ? <button onClick={this.onStop}>Stop</button> : <button onClick={this.onStart}>Start</button>}
        <button onClick={this.onReset}>Reset</button>
      </div>
    )
  }
}

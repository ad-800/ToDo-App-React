import React, { Component } from "react";
import "./StopWatch.css";
import Timer from "../Timer/Timer";

export default class Stopwatch extends Component {
  constructor(props) {
      super(props);
      this.state = this.initialState = {
          isRunning: false,
          timeElapsed: 0,
      };
  }
  toggle = () => {
      this.setState({ isRunning: !this.state.isRunning }, () => {
          this.state.isRunning ? this.startTimer() : clearInterval(this.timer)
      });
  }
  reset = () => {
      clearInterval(this.timer);
      this.setState(this.initialState);
  }
  startTimer () {
      this.startTime = Date.now();
      this.timer = setInterval(this.update, 10);
  }
  update = () => {
      const delta = Date.now() - this.startTime;
      this.setState({ timeElapsed: this.state.timeElapsed + delta });
      this.startTime = Date.now();
  }
  render() {
      const { isRunning, timeElapsed } = this.state;
      return (
          <div className='stop-watch'>
            <Timer id="timer" timeElapsed={timeElapsed} />
            <div className='controls'>
              <button className='btn-timer btn-one' onClick={this.toggle}>
                {isRunning ? 'Stop' : 'Start'}
              </button>
              <button className='btn-timer btn-two' onClick={isRunning ? this.lap : this.reset} hidden={(!isRunning && !timeElapsed) || (isRunning || !timeElapsed)}>
                {isRunning || !timeElapsed ? '' : 'Reset'}
              </button>
            </div>
          </div>
      );
  }
}

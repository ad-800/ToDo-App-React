import React from "react";
import "./Timer.css";

const Timer = (props) => {
  const getUnits = () => {
      const seconds = props.timeElapsed / 1000;
      return {
          hr: Math.floor(seconds / 3600).toString(),
          min: Math.floor(seconds / 60).toString(),
          sec: Math.floor(seconds % 60).toString(),
          msec: (seconds % 1).toFixed(3).substring(2)
      };
  }
      const leftPad = (width, n) => {
          if ((n + '').length > width) {
              return n;
          }
          const padding = new Array(width).join('0');
          return (padding + n).slice(-width);
      };
      const units = getUnits();
      return (
          <div className='timer' id={props.id}>
            <span className='digits'>{leftPad(2, units.hr)}:</span>
            <span className='digits'>{leftPad(2, units.min)}:</span>
            <span className='seconds'>{leftPad(2, units.sec)}</span>
          </div>
      );
}

export default Timer;

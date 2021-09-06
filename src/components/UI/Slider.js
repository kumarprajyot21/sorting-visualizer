import React from 'react';
import classes from './Slider.module.css';

function Slider(props) {
  return (
    <span className={classes.container}>
      <div className={classes.slider}>
        <input
          type='range'
          min={props.min}
          max={props.max}
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </span>
  );
}

export default Slider;

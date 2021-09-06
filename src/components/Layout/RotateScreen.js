import React from 'react';
import RotateIcon from '../UI/RotateIcon';
import classes from './RotateScreen.module.css';

function RotateScreen() {
  return (
    <div className={classes.container}>
      <span className={classes.icon}>
        <RotateIcon />
      </span>
      <p>Please rotate your device</p>
    </div>
  );
}

export default RotateScreen;

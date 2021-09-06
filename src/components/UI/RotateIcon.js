import React from 'react';
import classes from './RotateIcon.module.css';

function RotateIcon() {
  return (
    <svg
      version='1.1'
      id='Icons'
      x='0px'
      y='0px'
      viewBox='0 0 32 32'
      style={{ enableBackground: 'new 0 0 32 32' }}
    >
      <path
        className={classes.st0}
        d='M3,27V17c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H5C3.9,29,3,28.1,3,27z'
      />
      <line className={classes.st0} x1='25' y1='15' x2='25' y2='29' />
      <line className={classes.st0} x1='9' y1='15' x2='9' y2='29' />
      <line className={classes.st0} x1='6' y1='21' x2='6' y2='23' />
      <path
        className={classes.st0}
        d='M3,17V5c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2v7'
      />
      <line className={classes.st0} x1='3' y1='7' x2='17' y2='7' />
      <path className={classes.st0} d='M20,4.1c3.4,0.5,6,3.4,6,6.9l3-4' />
    </svg>
  );
}

export default RotateIcon;

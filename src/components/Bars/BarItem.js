import React from 'react';
import { Flipped } from 'react-flip-toolkit';
import classes from './BarItem.module.css';

function BarItem(props) {
  const barHeight = props.value + '%';

  return (
    <Flipped key={props.id} flipId={props.id}>
      <li
        className={classes.bar}
        style={{ height: barHeight, backgroundColor: props.color }}
      >
        {props.showNumber && <span>{props.value}</span>}
      </li>
    </Flipped>
  );
}

export default BarItem;

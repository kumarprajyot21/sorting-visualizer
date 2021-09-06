import React, { useEffect, useRef, useState } from 'react';
import { Flipped } from 'react-flip-toolkit';
import classes from './BarItem.module.css';

function BarItem(props) {
  const [showNumber, setShowNumber] = useState(false);
  const barRef = useRef();
  const barHeight = props.value + '%';
  const { listSize } = props;

  useEffect(() => {
    if (barRef.current.offsetHeight >= '22' && listSize <= 15) {
      setShowNumber(true);
    }
  }, [listSize]);

  return (
    <Flipped key={props.id} flipId={props.id}>
      <li
        className={classes.bar}
        style={{ height: barHeight, backgroundColor: props.color }}
        ref={barRef}
      >
        {showNumber && <span>{props.value}</span>}
      </li>
    </Flipped>
  );
}

export default BarItem;

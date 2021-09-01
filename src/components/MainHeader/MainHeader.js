import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { bubbleSort } from '../../utils/sortUtils';
import { setIntervalX } from '../../utils/helperUtils';
import { ListActions } from '../../store/list-slice';
import { SORT_DELAY, ARRAY_SIZE } from '../../constants';
import classes from './MainHeader.module.css';

function MainHeader() {
  const listData = useSelector((state) => state.list);
  const listSize = listData.length;
  const sortDelay = useSelector((state) => state.sortDelay);
  const dispatch = useDispatch();

  const sortHandler = () => {
    const newData = _.cloneDeep(listData);
    const newDataStates = bubbleSort(newData);
    setIntervalX(
      (midState) => {
        dispatch(ListActions.setArray(midState));
      },
      newDataStates,
      sortDelay,
      newDataStates.length
    );
  };

  const generateArrayHandler = () => {
    dispatch(ListActions.generateArray(listSize));
  };

  const sizeChangeHandler = (event) => {
    dispatch(ListActions.generateArray(+event.target.value));
  };

  const speedChangeHandler = (event) => {
    dispatch(ListActions.setDelay(+event.target.value));
  };

  return (
    <header className={classes.header}>
      <div>
        <button onClick={generateArrayHandler}>Generate New Array</button>
        <label htmlFor='sizeChanger'>Array Size</label>
        <input
          type='range'
          min={ARRAY_SIZE.MIN}
          max={ARRAY_SIZE.MAX}
          value={listSize}
          id='sizeChanger'
          onChange={sizeChangeHandler}
        />
        <label htmlFor='speedChanger'>Sort Speed</label>
        <input
          type='range'
          min={SORT_DELAY.MIN}
          max={SORT_DELAY.MAX}
          value={SORT_DELAY.MAX - (sortDelay - SORT_DELAY.MIN)}
          id='speedChanger'
          onChange={speedChangeHandler}
        />
      </div>
      <div className={classes.sortUtils}>
        <div className={classes.actions}>
          <button onClick={sortHandler}>Sort</button>
        </div>
        <div>
          <a href='/'>Bubble Sort</a>
          <a href='/'>Merge Sort</a>
          <a href='/'>Quick Sort</a>
          <a href='/'>Heap Sort</a>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { sortArray } from '../../utils/sortUtils';
import { ListActions } from '../../store/list-slice';
import { SORT_DELAY, ARRAY_SIZE, colors } from '../../constants';
import classes from './MainHeader.module.css';

function MainHeader() {
  const params = useParams();
  const { sortMethod } = params;

  const listData = useSelector((state) => state.list);
  const listSize = listData.length;
  const sortDelay = useSelector((state) => state.sortDelay);
  const dispatch = useDispatch();

  const sortHandler = () => {
    dispatch(sortArray(sortMethod, sortDelay, listData));
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
    <header
      className={classes.header}
      style={{ backgroundColor: colors.header }}
    >
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
        <button onClick={sortHandler} className={classes.sort}>
          Sort
        </button>
        <span className={classes.joinBar}></span>
        <div className={classes.sortMethods}>
          <NavLink activeClassName={classes.active} to='/bubble-sort'>
            Bubble Sort
          </NavLink>
          <NavLink activeClassName={classes.active} to='/merge-sort'>
            Merge Sort
          </NavLink>
          <NavLink to='/'>Quick Sort</NavLink>
          <NavLink to='/'>Heap Sort</NavLink>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;

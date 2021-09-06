import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { sortArray, cancelSorting } from '../../utils/sortUtils';
import { ListActions } from '../../store/list-slice';
import { SORT_DELAY, ARRAY_SIZE, colors } from '../../constants';
import Slider from '../UI/Slider';
import Dropdown from '../UI/Dropdown';
import classes from './MainHeader.module.css';

function MainHeader() {
  const params = useParams();
  const { sortMethod } = params;

  const dispatch = useDispatch();

  const isSorting = useSelector((state) => state.sortInterval.isSorting);
  const sortInterval = useSelector((state) => state.sortInterval.interval);

  const listData = useSelector((state) => state.list);
  const listSize = listData.length;
  const sortDelay = useSelector((state) => state.sortDelay);
  const sortSpeedPercent =
    Math.floor(
      ((SORT_DELAY.MAX - (sortDelay - SORT_DELAY.MIN)) /
        (SORT_DELAY.MAX - SORT_DELAY.MIN)) *
        100
    ) + '%';

  const sortHandler = () => {
    if (!isSorting) {
      dispatch(sortArray(sortMethod, sortDelay, listData));
    } else {
      dispatch(cancelSorting(sortInterval, listData));
    }
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

  const linkClickHandler = (event) => {
    if (isSorting) event.preventDefault();
  };

  return (
    <header
      className={classes.header}
      style={{ backgroundColor: colors.header }}
    >
      <div className={classes.sortUtils}>
        <button onClick={generateArrayHandler} disabled={isSorting}>
          Generate New Array
        </button>
        <Dropdown label='Array Size' badge={listSize} disabled={isSorting}>
          <Slider
            min={ARRAY_SIZE.MIN}
            max={ARRAY_SIZE.MAX}
            value={listSize}
            onChange={sizeChangeHandler}
          />
        </Dropdown>
        <Dropdown
          label='Sort Speed'
          badge={sortSpeedPercent}
          disabled={isSorting}
        >
          <Slider
            min={SORT_DELAY.MIN}
            max={SORT_DELAY.MAX}
            value={SORT_DELAY.MAX - (sortDelay - SORT_DELAY.MIN)}
            onChange={speedChangeHandler}
          />
        </Dropdown>
      </div>
      <div className={classes.sortActions}>
        <button
          onClick={sortHandler}
          className={isSorting ? classes.cancel : classes.sort}
        >
          {isSorting ? 'Cancel Sorting' : 'Sort'}
        </button>
        <span
          className={`${classes.joinBar} ${isSorting && classes.joinBarCancel}`}
        ></span>
        <div className={classes.sortMethods}>
          <NavLink
            activeClassName={classes.active}
            onClick={linkClickHandler}
            className={`${isSorting && classes.disabled}`}
            to='/bubble-sort'
          >
            Bubble Sort
          </NavLink>
          <NavLink
            activeClassName={classes.active}
            onClick={linkClickHandler}
            className={`${isSorting && classes.disabled}`}
            to='/merge-sort'
          >
            Merge Sort
          </NavLink>
          <NavLink
            activeClassName={classes.active}
            onClick={linkClickHandler}
            className={`${isSorting && classes.disabled}`}
            to='/quick-sort'
          >
            Quick Sort
          </NavLink>
          <NavLink
            activeClassName={classes.active}
            onClick={linkClickHandler}
            className={`${isSorting && classes.disabled}`}
            to='/heap-sort'
          >
            Heap Sort
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;

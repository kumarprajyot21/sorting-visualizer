import _ from 'lodash';
import { setIntervalX, setColor } from './helperUtils';
import { ListActions } from '../store/list-slice';
import { colors } from '../constants';
import quickSort from './sort-methods/quickSort';
import mergeSort from './sort-methods/mergeSort';
import bubbleSort from './sort-methods/bubbleSort';
import heapSort from './sort-methods/heapSort';

export const sortArray = (sortMethod, sortDelay, listData) => {
  return (dispatch) => {
    const newData = _.cloneDeep(listData);
    const newDataStates = [];

    if (sortMethod === 'bubble-sort') {
      bubbleSort(newData, newDataStates);
    } else if (sortMethod === 'merge-sort') {
      mergeSort(newData, 0, newData.length - 1, newDataStates);
    } else if (sortMethod === 'quick-sort') {
      quickSort(newData, 0, newData.length - 1, newDataStates);
    } else if (sortMethod === 'heap-sort') {
      heapSort(newData, newDataStates);
    }

    dispatch(ListActions.setIsSorting(true));
    const interval = setIntervalX(
      (midState) => {
        dispatch(ListActions.setArray(midState));
      },
      newDataStates,
      sortDelay,
      newDataStates.length,
      () => {
        dispatch(ListActions.setIsSorting(false));
      }
    );
    dispatch(ListActions.setSortingInterval(interval));
  };
};

export const cancelSorting = (interval, listData) => {
  return (dispatch) => {
    clearInterval(interval);
    dispatch(ListActions.setIsSorting(false));

    const newData = _.cloneDeep(listData);
    setColor(colors.darkCyan, ...newData);
    dispatch(ListActions.setArray(newData));
  };
};

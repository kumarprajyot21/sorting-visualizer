import _ from 'lodash';
import { setIntervalX, arrayMove, setColor } from './helperUtils';
import { ListActions } from '../store/list-slice';
import { colors } from '../constants';

export const bubbleSort = (arr, arrayStates) => {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (i > 0) {
        arr[i - 1].color = colors.darkCyan;
      }

      if (arr[i].value > arr[i + 1].value) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        arr[i].color = 'red';
        arr[i + 1].color = 'red';
      } else {
        arr[i].color = 'green';
        arr[i + 1].color = 'green';
      }

      arrayStates.push(_.cloneDeep(arr));
    }

    arr[j].color = colors.lightCyan;
    arr[j - 1].color = colors.darkCyan;
    if (j === 1) {
      arr[j - 1].color = colors.lightCyan;
      arrayStates.push(_.cloneDeep(arr));
    }
  }
};

export const merge = (arr, low, mid, high, arrayStates) => {
  const newArr = [];
  let i = low;
  let j = mid + 1;

  const displayArr = _.cloneDeep(arr); // divs displayed on screen
  let swapped = 0; // to calculate shift in i

  setColor([displayArr[mid]], 'yellow');
  arrayStates.push(_.cloneDeep(displayArr));

  while (i <= mid || j <= high) {
    if (i <= mid && j <= high) {
      const displayArrI = displayArr[swapped + i];
      const displayArrJ = displayArr[j];

      if (arr[i].value <= arr[j].value) {
        setColor([displayArrI, displayArrJ], 'green');
        arrayStates.push(_.cloneDeep(displayArr));
        setColor([displayArrI, displayArrJ], colors.darkCyan);

        newArr.push(arr[i]);
        i++;
      } else {
        setColor([displayArrI, displayArrJ], 'red');
        arrayMove(displayArr, j, low + newArr.length);
        arrayStates.push(_.cloneDeep(displayArr));
        setColor([displayArrI, displayArrJ], colors.darkCyan);
        swapped++;

        newArr.push(arr[j]);
        j++;
      }
    } else if (i <= mid) {
      arrayStates.push(_.cloneDeep(displayArr));
      newArr.push(arr[i]);
      i++;
    } else {
      arrayStates.push(_.cloneDeep(displayArr));
      newArr.push(arr[j]);
      j++;
    }

    setColor([displayArr[low + newArr.length - 1]], colors.lightCyan);
  }

  arrayStates.push(_.cloneDeep(displayArr));

  for (let p = low; p <= high; p++) {
    arr[p] = newArr[p - low];
  }
};

export const mergeSort = (arr, low, high, arrayStates) => {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid, arrayStates);
  mergeSort(arr, mid + 1, high, arrayStates);
  merge(arr, low, mid, high, arrayStates);
};

export const sortArray = (sortMethod, sortDelay, listData) => {
  return (dispatch) => {
    const newData = _.cloneDeep(listData);
    const newDataStates = [];

    if (sortMethod === 'bubble-sort') {
      bubbleSort(newData, newDataStates);
    } else if (sortMethod === 'merge-sort') {
      mergeSort(newData, 0, newData.length - 1, newDataStates);
    }

    setIntervalX(
      (midState) => {
        dispatch(ListActions.setArray(midState));
      },
      newDataStates,
      sortDelay,
      newDataStates.length
    );
  };
};

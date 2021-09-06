import _ from 'lodash';
import { arrayMove, setColor } from '../helperUtils';
import { colors } from '../../constants';

const merge = (arr, low, mid, high, arrayStates) => {
  const newArr = [];
  let i = low;
  let j = mid + 1;

  const displayArr = _.cloneDeep(arr); // divs displayed on screen
  let swapped = 0; // to calculate shift in i

  setColor('yellow', displayArr[mid]);
  arrayStates.push(_.cloneDeep(displayArr));

  while (i <= mid || j <= high) {
    if (i <= mid && j <= high) {
      const displayArrI = displayArr[swapped + i];
      const displayArrJ = displayArr[j];

      if (arr[i].value <= arr[j].value) {
        setColor('green', displayArrI, displayArrJ);
        arrayStates.push(_.cloneDeep(displayArr));
        setColor(colors.darkCyan, displayArrI, displayArrJ);

        newArr.push(arr[i]);
        i++;
      } else {
        setColor('red', displayArrI, displayArrJ);
        arrayMove(displayArr, j, low + newArr.length);
        arrayStates.push(_.cloneDeep(displayArr));
        setColor(colors.darkCyan, displayArrI, displayArrJ);
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

    setColor(colors.lightCyan, displayArr[low + newArr.length - 1]);
  }

  arrayStates.push(_.cloneDeep(displayArr));

  for (let p = low; p <= high; p++) {
    arr[p] = newArr[p - low];
  }
};

const mergeSort = (arr, low, high, arrayStates) => {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid, arrayStates);
  mergeSort(arr, mid + 1, high, arrayStates);
  merge(arr, low, mid, high, arrayStates);
};

export default mergeSort;

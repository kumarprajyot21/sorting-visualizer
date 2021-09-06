import _ from 'lodash';
import { setColor } from '../helperUtils';
import { colors } from '../../constants';

const partition = (arr, low, high, arrayStates) => {
  const pivot = arr[high].value;

  setColor('yellow', arr[high]);
  arrayStates.push(_.cloneDeep(arr));

  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    const arrJ = arr[j];
    setColor('green', arrJ);

    if (arr[j].value < pivot) {
      setColor('red', arrJ);

      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    arrayStates.push(_.cloneDeep(arr));
    setColor(colors.darkCyan, arrJ);
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  arrayStates.push(_.cloneDeep(arr));
  setColor(colors.lightCyan, arr[i + 1]);
  arrayStates.push(_.cloneDeep(arr));

  return i + 1;
};

const quickSort = (arr, low, high, arrayStates) => {
  if (low > high) return;
  if (low === high) {
    setColor(colors.lightCyan, arr[low]);
    arrayStates.push(_.cloneDeep(arr));
    return;
  }
  const pi = partition(arr, low, high, arrayStates);
  quickSort(arr, low, pi - 1, arrayStates);
  quickSort(arr, pi + 1, high, arrayStates);
};

export default quickSort;

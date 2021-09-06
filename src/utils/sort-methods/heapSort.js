import _ from 'lodash';
import { setColor } from '../helperUtils';
import { colors } from '../../constants';

const heapify = (arr, root, heapSize, arrayStates) => {
  let maxIndex = root;
  const left = 2 * root + 1;
  const right = 2 * root + 2;

  setColor('yellow', arr[root]);

  if (left < heapSize && arr[left].value > arr[maxIndex].value) {
    setColor('darkgoldenrod', arr[left]);
    maxIndex = left;
  }
  if (right < heapSize && arr[right].value > arr[maxIndex].value) {
    setColor('darkgoldenrod', arr[right]);
    maxIndex = right;
  }

  arrayStates.push(_.cloneDeep(arr));
  setColor(colors.darkCyan, arr[root]);
  if (left < heapSize) setColor(colors.darkCyan, arr[left]);
  if (right < heapSize) setColor(colors.darkCyan, arr[right]);
  setColor('green', arr[maxIndex]);

  if (maxIndex !== root) {
    [arr[root], arr[maxIndex]] = [arr[maxIndex], arr[root]];

    arrayStates.push(_.cloneDeep(arr));
    setColor(colors.darkCyan, arr[root]);

    heapify(arr, maxIndex, heapSize, arrayStates);
  } else {
    setColor(colors.darkCyan, arr[root]);
  }
};

const heapSort = (arr, arrayStates) => {
  const heapSize = arr.length;
  for (let i = heapSize / 2 - 1; i >= 0; i--) {
    heapify(arr, i, heapSize, arrayStates);
  }

  for (let i = heapSize - 1; i > 0; i--) {
    arrayStates.push(_.cloneDeep(arr));
    [arr[i], arr[0]] = [arr[0], arr[i]];
    setColor(colors.lightCyan, arr[i]);
    arrayStates.push(_.cloneDeep(arr));
    heapify(arr, 0, i, arrayStates);
  }

  setColor(colors.lightCyan, arr[0]);
  arrayStates.push(_.cloneDeep(arr));
};

export default heapSort;

import _ from 'lodash';
import { setColor } from '../helperUtils';
import { colors } from '../../constants';

const bubbleSort = (arr, arrayStates) => {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (i > 0) {
        setColor(colors.darkCyan, arr[i - 1]);
      }

      if (arr[i].value > arr[i + 1].value) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        setColor('red', arr[i], arr[i + 1]);
      } else {
        setColor('green', arr[i], arr[i + 1]);
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

export default bubbleSort;

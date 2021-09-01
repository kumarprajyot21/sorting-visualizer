import _ from 'lodash';

export const bubbleSort = (arr) => {
  const arrayStates = [];

  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      arr[i].color = 'green';
      arr[i + 1].color = 'green';

      if (arr[i].value > arr[i + 1].value) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        arr[i].color = 'red';
        arr[i + 1].color = 'red';
      }

      if (i > 0) {
        arr[i - 1].color = '#45a29e';
      }

      arrayStates.push(_.cloneDeep(arr));
    }

    arr[j].color = '#66fcf1';
    arr[j - 1].color = '#45a29e';
    if (j === 1) {
      arr[j - 1].color = '#66fcf1';
      arrayStates.push(_.cloneDeep(arr));
    }
  }

  return arrayStates;
};

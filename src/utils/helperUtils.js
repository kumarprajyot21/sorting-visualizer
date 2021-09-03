import { ARRAY_VALUE } from '../constants';

export const setIntervalX = (callback, callbackData, delay, repititions) => {
  let count = 0;
  const interval = setInterval(() => {
    callback(callbackData[count]);
    count++;

    if (count === repititions) {
      clearInterval(interval);
    }
  }, delay);
};

export const generateRandomArray = (length) => {
  return Array.from({ length }, () => ({
    value: Math.floor(
      Math.random() * (ARRAY_VALUE.MAX - ARRAY_VALUE.MIN) + ARRAY_VALUE.MIN
    ),
    id: Math.random().toString(),
    color: '#45a29e',
  }));
};

export const arrayMove = (arr, oldIndex, newIndex) => {
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr;
};

export const setColor = (objList, color) => {
  objList.forEach((obj) => (obj.color = color));
};

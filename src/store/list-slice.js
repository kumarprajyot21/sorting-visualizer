import { createSlice } from '@reduxjs/toolkit';
import { generateRandomArray } from '../utils/helperUtils';
import { SORT_DELAY } from '../constants';

const initialState = {
  list: generateRandomArray(10),
  // list: [
  //   { value: 15, id: 15 },
  //   { value: 51, id: 51 },
  //   { value: 11, id: 11 },
  //   { value: 13, id: 13 },
  //   { value: 60, id: 60 },
  //   { value: 26, id: 26 },
  //   { value: 96, id: 96 },
  //   { value: 39, id: 39 },
  //   { value: 26, id: 100 },
  // ],
  sortDelay: 300,
};

const ListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setArray: (state, action) => {
      state.list = action.payload;
    },
    generateArray: (state, action) => {
      state.list = generateRandomArray(action.payload);
    },
    setDelay: (state, action) => {
      state.sortDelay = SORT_DELAY.MAX - (action.payload - SORT_DELAY.MIN);
    },
  },
});

export const ListActions = ListSlice.actions;

export default ListSlice.reducer;

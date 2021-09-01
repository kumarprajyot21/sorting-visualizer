import { createSlice } from '@reduxjs/toolkit';
import { generateRandomArray } from '../utils/helperUtils';
import { SORT_DELAY } from '../constants';

const initialState = {
  list: generateRandomArray(10),
  sortMethod: 'bubble',
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

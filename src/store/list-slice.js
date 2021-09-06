import { createSlice } from '@reduxjs/toolkit';
import { generateRandomArray } from '../utils/helperUtils';
import { SORT_DELAY } from '../constants';

const initialState = {
  list: generateRandomArray(10),
  sortDelay: 300,
  sortInterval: {
    isSorting: false,
    interval: null,
  },
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
    setIsSorting: (state, action) => {
      state.sortInterval.isSorting = action.payload;
    },
    setSortingInterval: (state, action) => {
      state.sortInterval.interval = action.payload;
    },
  },
});

export const ListActions = ListSlice.actions;

export default ListSlice.reducer;

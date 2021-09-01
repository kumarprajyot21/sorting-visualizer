import { configureStore } from '@reduxjs/toolkit';
import listReducer from './list-slice';

const store = configureStore({
  reducer: listReducer,
});

export default store;

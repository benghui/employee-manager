import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../reducers/listReducer';
// import rootReducers from '../reducers';


export const store = configureStore({
  reducer: {
    list: listReducer,
  }
});

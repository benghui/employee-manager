import { configureStore } from '@reduxjs/toolkit';
import { listApi } from '../services/listApi';
import listReducer from '../reducers/listReducer';

export const store = configureStore({
  reducer: {
    [listApi.reducerPath]: listApi.reducer,
    list: listReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listApi.middleware)
});

import { configureStore } from '@reduxjs/toolkit';
import { listApi } from '../services/employeeApi';

export const store = configureStore({
  reducer: {
    [employeeApi.reducerPath]: employeeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(employeeApi.middleware)
});

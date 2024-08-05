import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './moretag';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

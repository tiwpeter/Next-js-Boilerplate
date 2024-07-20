import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/moretag';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

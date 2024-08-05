import { combineReducers } from '@reduxjs/toolkit';

import iconsReducer from '@/features/IconReducer'; // Ensure correct path
import tagsReducer from '@/features/tagsReducer'; // Ensure correct path

const rootReducer = combineReducers({
  tags: tagsReducer,
  icons: iconsReducer,
});

export default rootReducer;

import { combineReducers } from '@reduxjs/toolkit';
import tagsReducer from '../tagsReducer'; // Ensure correct path
import iconsReducer from '../IconReducer'; // Ensure correct path

const rootReducer = combineReducers({
  tags: tagsReducer,
  icons: iconsReducer,
  
});

export default rootReducer;

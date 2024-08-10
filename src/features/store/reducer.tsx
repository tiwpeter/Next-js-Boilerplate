import { combineReducers } from '@reduxjs/toolkit';

import iconsReducer from '@/features/IconReducer'; 
import tagsReducer from '@/features/tagsReducer'; 
import IconReducer from '@/features/Icontag'; 

const rootReducer = combineReducers({
  tags: tagsReducer,
  icons: iconsReducer,
  icontag:IconReducer
});

export default rootReducer;

import { combineReducers } from '@reduxjs/toolkit';
import iconsReducer from '@/features/IconReducer';
import IconReducer from '@/features/Icontag';
import tagsReducerId from '@/features/tagsReducerId'; 

const rootReducer = combineReducers({
  tags: tagsReducerId, // ใช้ tagsReducerId
  icons: iconsReducer,
  icontag: IconReducer
});

export default rootReducer;

import { combineReducers } from '@reduxjs/toolkit';

import iconsReducer from '@/features/IconReducer';

const rootReducer = combineReducers({
  //  tags: tagsReducer,
  icons: iconsReducer,
  //  icontag: IconReducer,
  //  tagId: tagsReducerId,
});

export default rootReducer;

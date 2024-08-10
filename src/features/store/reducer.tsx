import { combineReducers } from '@reduxjs/toolkit';

import iconsReducer from '@/features/IconReducer';
import IconReducer from '@/features/Icontag';
import tagsReducer from '@/features/tagReduxcom';
import tagsReducerId from '@/features/tagsReducerId';

const rootReducer = combineReducers({
  tags: tagsReducer,
  icons: iconsReducer,
  icontag: IconReducer,
  tagId: tagsReducerId,
});

export default rootReducer;

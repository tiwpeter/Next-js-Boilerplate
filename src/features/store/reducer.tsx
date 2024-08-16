import { combineReducers } from '@reduxjs/toolkit';

import IconTag from '@/features/forTagWithIcon/IconTag';
import itemsReducer from '@/features/forTagWithIcon/itemsSlice';
import iconsReducer from '@/features/IconReducer';
import tagsReducerId from '@/features/tagsReducerId';

const rootReducer = combineReducers({
  //  tags: tagsReducer,
  icons: iconsReducer,
  data: itemsReducer,
  iconfortag: IconTag,
  //  icontag: IconReducer,
  tags: tagsReducerId,
});

export default rootReducer;

import { combineReducers } from '@reduxjs/toolkit';

import IconTag from '@/features/forTagWithIcon/IconTag';
import itemsReducer from '@/features/forTagWithIcon/itemsSlice';
import iconsReducer from '@/features/IconReducer';

const rootReducer = combineReducers({
  //  tags: tagsReducer,
  icons: iconsReducer,
  data: itemsReducer,
  iconfortag: IconTag,
  //  icontag: IconReducer,
  //  tagId: tagsReducerId,
});

export default rootReducer;

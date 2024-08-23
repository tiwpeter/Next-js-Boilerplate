import { combineReducers } from '@reduxjs/toolkit';

import IconTag from '@/features/forTagWithIcon/IconTag';
import itemsReducer from '@/features/forTagWithIcon/TagSlice';
import iconsReducer from '@/features/IconReducer';
import mainPantip from '@/features/pantipSlie';
import tagsReducerId from '@/features/tagsReducerId';

const rootReducer = combineReducers({
  pantip: mainPantip,
  iconfortag: IconTag,
  icons: iconsReducer,
  tagsforicon: itemsReducer,
  tags: tagsReducerId,
});

export default rootReducer;

// src/redix/selecIcon.tsx
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/store'

export const selectIcons = (state: RootState) => state.icons.data;

export const selectIconByTextEng = (textEng: string) => createSelector(
  [selectIcons],
  (icons) => icons.find(icon => icon.text_eng === textEng)
);

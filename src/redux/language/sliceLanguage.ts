import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageState } from '../../Interfaces/Interfaces';

const initialState: LanguageState = {
  language: 'en', // Domyślny język
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state: LanguageState, action: PayloadAction<'en' | 'pl'>) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const languageReducer=languageSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const savedTheme = localStorage.getItem('theme') || 'purple';
const savedMode = localStorage.getItem('mode') || 'light';
const savedLanguage = localStorage.getItem('language') || 'en';

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: {
    theme: savedTheme,
    mode: savedMode,
    language: savedLanguage,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem('language', action.payload);
    },
    setMode: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem('mode', action.payload);
    },
  },
});

export const { setTheme, setLanguage, setMode } = preferencesSlice.actions;

export default preferencesSlice.reducer;


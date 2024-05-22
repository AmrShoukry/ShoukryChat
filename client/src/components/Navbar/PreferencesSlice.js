import { createSlice } from '@reduxjs/toolkit';

if (localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', 'purple');
}

if (localStorage.getItem('mode') === null) {
  localStorage.setItem('mode', 'light');
}

if (localStorage.getItem('language') === null) {
  localStorage.setItem('language', 'en');
}

const savedTheme = localStorage.getItem('theme');
const savedMode = localStorage.getItem('mode');
const savedLanguage = localStorage.getItem('language');

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


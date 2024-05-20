import { configureStore } from '@reduxjs/toolkit';
import PreferencesSlice from './components/Navbar/PreferencesSlice';

const store = configureStore({
  reducer: {
    preferencesReducer: PreferencesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;


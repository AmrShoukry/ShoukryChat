import { configureStore } from '@reduxjs/toolkit';
import PreferencesSlice from './components/Navbar/PreferencesSlice';
import UserSlice from './components/Auth/UserSlice';

const store = configureStore({
  reducer: {
    preferencesReducer: PreferencesSlice,
    userReducer: UserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: { api: 'http://localhost:8000/v1' },
      },
    }),
});

export default store;


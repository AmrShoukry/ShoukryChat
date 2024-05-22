import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    isLoading: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateMode.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(updateTheme.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(updateLanguage.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const updateMode = createAsyncThunk(
  'user/updateMode',
  async (mode, { dispatch, getState, extra }) => {
    const { api } = extra;
    const res = await fetch(`${api}/preferences/updateMode`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mode }),
    });

    const data = await res.json();

    return data;
  },
);

export const updateTheme = createAsyncThunk(
  'user/updateTheme',
  async (theme, { dispatch, getState, extra }) => {
    const { api } = extra;
    const res = await fetch(`${api}/preferences/updateTheme`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ theme }),
    });

    const data = await res.json();

    return data;
  },
);

export const updateLanguage = createAsyncThunk(
  'user/updateLanguage',
  async (language, { dispatch, getState, extra }) => {
    const { api } = extra;
    const res = await fetch(`${api}/preferences/updateLanguage`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ language }),
    });

    const data = await res.json();

    return data;
  },
);

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;


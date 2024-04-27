import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

// ** Types
import { AuthState } from './type';

const initialState = {
  email: '',
  isLoggedIn: false,
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, { payload }: PayloadAction<{ email: string }>) {
      const { email } = payload;
      state.isLoggedIn = true;
      state.email = email;

      // Store login data in a cookie
      document.cookie = `authData=${JSON.stringify({ email, isLoggedIn: true })}; path=/`;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.email = '';

      // Remove the cookie
      document.cookie = `authData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;

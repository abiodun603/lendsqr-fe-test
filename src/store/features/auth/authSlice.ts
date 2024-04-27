import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

// ** Types
import { AuthState } from './type';

const initialState = {
  email: '',
  isLoggedIn: false
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state,  { payload }: PayloadAction<{ email: string }>) {
      const { email } = payload;
      console.log(email)
      state.isLoggedIn = true;
      state.email = email;
      localStorage.setItem('authData', JSON.stringify(state));
    },
    logout(state) {
      state.isLoggedIn = false;
      state.email = '';
      localStorage.removeItem('authData'); 
    },
  },
});

export default authSlice.reducer

export const { login, logout } = authSlice.actions;

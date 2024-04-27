// store.ts

import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './features/users/UsersService';
import authReducer from './features/auth/authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const usersApiMiddleware = usersApi.middleware;
    return getDefaultMiddleware()
      .concat(usersApiMiddleware)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

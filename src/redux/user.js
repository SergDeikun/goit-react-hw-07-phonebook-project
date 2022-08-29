import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApiSlice/userApiSlice';

const initialState = {
  name: '',
  email: '',
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: builder => {
    builder
      .addMatcher(
        userApi.endpoints.registerUser.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.user.name;
          state.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )

      .addMatcher(
        userApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.user.name;
          state.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )

      .addMatcher(
        userApi.endpoints.logOut.matchFulfilled,
        (state, { payload }) => {
          state.name = '';
          state.email = '';
          state.token = '';
          state.isLoggedIn = false;
        }
      )

      // .addMatcher(userApi.endpoints.currentUser.pending, state => {
      //   state.isRefreshing = true;
      // })

      .addMatcher(
        userApi.endpoints.currentUser.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.name;
          state.email = payload.email;
          state.isLoggedIn = true;
        }
      );
  },
});

export default userSlice.reducer;

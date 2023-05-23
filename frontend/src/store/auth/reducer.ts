import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser, logoutUser } from './action';
import { UserState } from './types';
import { editUser } from './action';

// const userString = localStorage.getItem('user');
// const user = userString ? JSON.parse(userString) : '';

const user = JSON.parse(localStorage.getItem('user') as string);

export const initialState: UserState = {
  user: user ? user : '',
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    //registerUser
    builder
      .addCase(registerUser.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, _) => {
        state.isError = true;
        state.isLoading = false;
        state.user = null;
      });

    //login user
    builder
      .addCase(loginUser.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, _) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      });

    //logout user
    builder.addCase(logoutUser.fulfilled, (state, _) => {
      state.user = null;
    });

    //crud user
    builder
      .addCase(editUser.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(editUser.rejected, (state, _) => {
        state.isError = true;
        state.isLoading = false;
        state.user = undefined;
      });
  },
});

export const { reset } = userSlice.actions;
export const authReducer = userSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  EditUserInput,
  LoginUserInput,
  RegisterUserInput,
  User,
} from './types';
import authService from './service';
import { AuthState } from '../book-service/types';

export const loginUser = createAsyncThunk<User, LoginUserInput>(
  'loginUser',
  async (user, thunkAPI) => {
    try {
      return await authService.loginUser(user);
    } catch (err: any) {
      return thunkAPI.rejectWithValue({ err: err.data });
    }
  }
);

export const registerUser = createAsyncThunk<User, RegisterUserInput>(
  'registerUser',
  async (user, thunkAPI) => {
    try {
      return await authService.registerUser(user);
    } catch (err: any) {
      return thunkAPI.rejectWithValue({ err: err.data });
    }
  }
);

export const logoutUser = createAsyncThunk('logoutUser', async () => {
  await authService.logoutUser();
});

export const editUser = createAsyncThunk<
  User,
  { userId: string; userData: EditUserInput }
>('editUser', async ({ userId, userData }, thunkAPI) => {
  try {
    const authState = thunkAPI.getState() as AuthState;
    const token = authState.auth.user.token;
    return await authService.editUser(userId, userData, token);
  } catch (err: any) {
    return thunkAPI.rejectWithValue({ err: err.data });
  }
});

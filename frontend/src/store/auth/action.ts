import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginUserInput, RegisterUserInput, User } from './types';
import authService from './service';
import { request } from '../../api/api';
import { LOGIN_API, REGISTER_API } from '../../utilities/constant';

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

// ---------
// export const loginUser = createAsyncThunk<User, LoginUserInput>(
//   'loginUser',
//   async (user, thunkAPI) => {
//     try {
//       return await request.post(LOGIN_API, user);
//     } catch (err: any) {
//       return thunkAPI.rejectWithValue({ err: err.data });
//     }
//   }
// );

// export const registerUser = createAsyncThunk<User, RegisterUserInput>(
//   'registerUser',
//   async (user, thunkAPI) => {
//     try {
//       return await request.post(REGISTER_API, {
//         userName: user.username,
//         emailAddress: user.emailAddress,
//         password: user.password,
//         address: user.address,
//         firstName: user.firstName,
//         middleName: user.middleName,
//         lastName: user.lastName,
//         birthDate: user.birthDate,
//         phoneNumber: user.phoneNumber,
//         telephoneNumber: user.telephoneNumber,
//       });
//     } catch (err: any) {
//       return thunkAPI.rejectWithValue({ err: err.data });
//     }
//   }
// );

// export const logoutUser = createAsyncThunk('logoutUser', async () => {
//   await authService.logoutUser();
// });

import { createAsyncThunk } from '@reduxjs/toolkit';
import bookService from './service';
import { ServiceUserInput, Service, AuthState } from './types';

export const createServiceBook = createAsyncThunk<Service, ServiceUserInput>(
  'bookService',
  async (service, thunkAPI) => {
    try {
      const authState = thunkAPI.getState() as AuthState;
      const token = authState.auth.user.token;
      return await bookService.createService(service, token);
    } catch (err: any) {
      return thunkAPI.rejectWithValue({ err: err.data });
    }
  }
);

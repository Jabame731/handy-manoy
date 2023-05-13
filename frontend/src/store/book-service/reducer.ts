import { createSlice } from '@reduxjs/toolkit';
import { createServiceBook } from './action';
import { ServiceState } from './types';

export const initialState: ServiceState = {
  service: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
};

export const serviceSlice = createSlice({
  name: 'service',
  initialState: initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createServiceBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createServiceBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.service.push(action.payload);
      })
      .addCase(createServiceBook.rejected, (state, _) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { reset } = serviceSlice.actions;
export const serviceReducer = serviceSlice.reducer;

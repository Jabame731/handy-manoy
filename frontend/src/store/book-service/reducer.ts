import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createServiceBook, getServicesByUser } from './action';
import { ServiceState, Service } from './types';

export const initialState: ServiceState = {
  services: [],
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
        state.services.push(action.payload);
      })
      .addCase(createServiceBook.rejected, (state, _) => {
        state.isError = true;
        state.isLoading = false;
      })

      //get services from user
      .addCase(getServicesByUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getServicesByUser.fulfilled,
        (state, action: PayloadAction<Service[]>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.services = action.payload;
        }
      )
      .addCase(getServicesByUser.rejected, (state, _) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { reset } = serviceSlice.actions;
export const serviceReducer = serviceSlice.reducer;

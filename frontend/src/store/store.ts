import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authReducer } from './auth/reducer';
import { serviceReducer } from './book-service/reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    service: serviceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

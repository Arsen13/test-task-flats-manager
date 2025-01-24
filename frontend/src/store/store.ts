import { configureStore } from '@reduxjs/toolkit';
import flatReducer from './slice';

export const store = configureStore({
    reducer: {
      flats: flatReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
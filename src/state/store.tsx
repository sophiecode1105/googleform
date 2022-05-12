import { configureStore } from '@reduxjs/toolkit';
import surveyReducer from './survey';

export const store = configureStore({
  reducer: {
    surveyData: surveyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

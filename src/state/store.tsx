import { configureStore } from '@reduxjs/toolkit';
import surveyReducer from './survey';
import surveyAnswerReducer from './result';

export const store = configureStore({
  reducer: {
    surveyData: surveyReducer,
    surveyAnswer: surveyAnswerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import short from '../assets/short.png';
import { answer, answerState, option, question, surveyState, title, type } from '../model/typeDefs';

const initialState: answerState = {
  header: {
    title: '제목 없는 설문지',
    explain: '',
  },
  results: [
    {
      title: '',
      answer: '',
      necessary: false,
      optionType: 'short-text',
    },
  ],
};

export const surveyAnswerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    createAnswerFormData: (state, action: PayloadAction<{ form: surveyState }>) => {
      const { title, explain } = action.payload.form?.header;
      state.header.title = title;
      state.header.explain = explain;

      let answerData = action.payload.form.questions;
      let answers = answerData.map((answer) => {
        return {
          title: answer.title,
          answer: '',
          necessary: answer.necessary,
          optionType: answer.optionType.sort,
        };
      });
      state.results = answers;
    },
    updateAnswerData: (state, action: PayloadAction<{ answer: string; aIdx: number }>) => {
      const { aIdx, answer } = action.payload;
      state.results[aIdx].answer = answer;
    },
  },
});

export const { createAnswerFormData } = surveyAnswerSlice.actions;
export default surveyAnswerSlice.reducer;

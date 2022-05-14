import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { idText } from 'typescript';
import Question from '../components/Question/question';
import short from '../assets/short.png';
import { surveyState, option, question, type } from '../model/typeDefs';

const initialState: surveyState = {
  header: {
    title: '제목 없는 설문지',
    explain: '',
  },
  questions: [
    {
      title: '',
      optionType: {
        typeTitle: '단답형',
        sort: 'short',
        img: short,
      },
      necessary: false,
      optionList: [
        {
          content: '옵션 1',
          order: 1,
        },
      ],
    },
  ],

  value: 'title',
};

export const surveyDataSlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    updateHedaerData: (state, action: PayloadAction<{ title: string; explain: string }>) => {
      state.header.title = action.payload.title;
      state.header.explain = action.payload.explain;
    },
    updateFocused: (state, action: PayloadAction<{ title: string }>) => {
      state.value = action.payload.title;
    },
    changeQuestionTitle: (state, action: PayloadAction<{ qIdx: number; title: string }>) => {
      const { qIdx, title } = action.payload;
      state.questions[qIdx].title = title;
    },
    changeOptionType: (state, action: PayloadAction<{ qIdx: number; option: type }>) => {
      const { qIdx, option } = action.payload;
      state.questions[qIdx].optionType = option;
    },
    changeNeccessaryState: (state, action: PayloadAction<{ qIdx: number; isOn: boolean }>) => {
      const { qIdx, isOn } = action.payload;
      state.questions[qIdx].necessary = isOn;
    },
    changeOptionTitle: (state, action: PayloadAction<{ qIdx: number; idx: number; content: string }>) => {
      const { qIdx, idx, content } = action.payload;
      state.questions[qIdx].optionList[idx].content = content;
    },
    updateOptionList: (state, action: PayloadAction<{ qIdx: number; list: option[] }>) => {
      const { qIdx, list } = action.payload;
      state.questions[qIdx].optionList = list;
    },
    removeItemFromOptionList: (state, action: PayloadAction<{ qIdx: number; itemIdx: number }>) => {
      const { qIdx, itemIdx } = action.payload;
      state.questions[qIdx].optionList = state.questions[qIdx].optionList.filter((_, i) => i !== itemIdx);
    },
    addQuestionList: (state, action: PayloadAction<{ newQuestion: question }>) => {
      const { newQuestion } = action.payload;
      console.log('잘들어가는지', newQuestion);
      let newList = [...state.questions, newQuestion];
      state.questions = newList;
    },
    removeQuestionFromQuestions: (state, action: PayloadAction<{ qIdx: number }>) => {
      const { qIdx } = action.payload;
      state.questions = state.questions.filter((_, i) => i !== qIdx);
    },
  },
});

export const {
  updateHedaerData,
  updateFocused,
  changeQuestionTitle,
  changeOptionType,
  changeNeccessaryState,
  changeOptionTitle,
  updateOptionList,
  removeItemFromOptionList,
  addQuestionList,
  removeQuestionFromQuestions,
} = surveyDataSlice.actions;
export default surveyDataSlice.reducer;

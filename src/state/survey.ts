import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { idText } from 'typescript';
import Question from '../components/Question/question';
import { surveyState, option } from '../model/typeDefs';

const initialState: surveyState = {
  header: {
    title: '제목 없는 설문지',
    explain: '',
  },
  questions: [
    {
      title: '',
      optionType: '단답형',
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
    changeOptionType: (state, action: PayloadAction<{ qIdx: number; option: string }>) => {
      const { qIdx, option } = action.payload;
      state.questions[qIdx].optionType = option;
    },
    changeOptionTitle: (state, action: PayloadAction<{ qIdx: number; idx: number; content: string }>) => {
      const { qIdx, idx, content } = action.payload;
      state.questions[qIdx].optionList[idx].content = content;
    },
    updateOptionList: (state, action: PayloadAction<{ qIdx: number; list: option[] }>) => {
      const { qIdx, list } = action.payload;
      state.questions[qIdx].optionList = action.payload.list;
    },
    removeItemFromOptionList: (state, action: PayloadAction<{ qIdx: number; itemIdx: number }>) => {
      const { qIdx, itemIdx } = action.payload;
      state.questions[qIdx].optionList = state.questions[qIdx].optionList.filter((_, i) => i !== itemIdx);
    },
  },
});

export const {
  updateHedaerData,
  updateFocused,
  changeOptionType,
  changeOptionTitle,
  updateOptionList,
  removeItemFromOptionList,
} = surveyDataSlice.actions;
export default surveyDataSlice.reducer;

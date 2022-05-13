import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { surveyState } from '../model/typeDefs';

const initialState: surveyState = {
  header: {
    title: '제목 없는 설문지',
    explain: '',
  },
  question: {
    title: '',
    optionType: '단답형',
    optionList: ['옵션1'],
  },
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
    changeOptionType: (state, action: PayloadAction<{ option: string }>) => {
      state.question.optionType = action.payload.option;
    },
    changeOptionTitle: (state, action: PayloadAction<{ idx: number; content: string }>) => {
      state.question.optionList[action.payload.idx] = action.payload.content;
    },
    updateOptionList: (state, action: PayloadAction<{ list: string[] }>) => {
      state.question.optionList = action.payload.list;
    },
  },
});

export const { updateHedaerData, updateFocused, changeOptionType, changeOptionTitle, updateOptionList } =
  surveyDataSlice.actions;
export default surveyDataSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { surveyState } from '../model/typeDefs';

const initialState: surveyState = {
  header: {
    title: '제목 없는 설문지',
    explain: '',
  },
  value: 'title',
};

export const surveyDataSlice = createSlice({
  name: 'focused',
  initialState,
  reducers: {
    updateHedaerData: (state, action: PayloadAction<{ title: string; explain: string }>) => {
      state.header.title = action.payload.title;
      state.header.explain = action.payload.explain;
    },
    updateFocused: (state, action: PayloadAction<{ title: string }>) => {
      state.value = action.payload.title;
    },
  },
});

export const { updateHedaerData, updateFocused } = surveyDataSlice.actions;
export default surveyDataSlice.reducer;

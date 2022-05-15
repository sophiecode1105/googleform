import styled from 'styled-components';
import PvTitle from '../components/Preview/pvTitle';
import { useEffect, useState } from 'react';
import { surveyState } from '../model/typeDefs';
import PvQuestion from '../components/Preview/pvQuestion';
import { Button, ButtonWrap, DeleteAnswer } from '../style/buttonSt';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import survey, { changeSubmitState, updateAllData } from '../state/survey';
import { useAppDispatch } from '../state/hook';

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const Preview = () => {
  const dispatch = useAppDispatch();
  const surveyData = useSelector((state: RootState) => state.surveyData);

  const isSubmit = surveyData.submit;

  const necessary = surveyData.questions.filter((question) => {
    return question.necessary;
  });
  console.log('서베이데이타', surveyData);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('preview') || '');
    console.log('데이터', data);
    dispatch(updateAllData({ surveyData: data }));
  }, []);

  const changePageToResult = () => {
    dispatch(changeSubmitState({ submitState: true }));
  };

  return (
    <Container>
      <PvTitle necessary={Boolean(necessary.length)} header={surveyData.header}></PvTitle>
      {surveyData.questions.map((question, idx) => {
        return <PvQuestion isSubmit={isSubmit} question={question} qIdx={idx} />;
      })}
      <ButtonWrap>
        <Button onClick={changePageToResult}>제출</Button>
        <DeleteAnswer>양식 지우기</DeleteAnswer>
      </ButtonWrap>
    </Container>
  );
};

export default Preview;

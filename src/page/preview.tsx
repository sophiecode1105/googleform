import styled from 'styled-components';
import PvTitle from '../components/Preview/pvTitle';
import { useEffect, useState } from 'react';
import { surveyState } from '../model/typeDefs';
import PvQuestion from '../components/Preview/pvQuestion';
import { Button, ButtonWrap, DeleteAnswer } from '../style/buttonSt';
import { useAppDispatch } from '../state/hook';
import { createAnswerFormData } from '../state/result';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const Preview = () => {
  const dispatch = useAppDispatch();
  const initialData = useSelector((state: RootState) => state.surveyData);
  const [surveyData, setSurveyData] = useState<surveyState>(initialData);

  let necessary = surveyData?.questions.filter((question) => {
    return question.necessary;
  });
  console.log('네세세리', necessary);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('preview') || '');
    setSurveyData(data);
  }, []);

  useEffect(() => {
    dispatch(createAnswerFormData({ form: surveyData }));
  }, [surveyData]);

  return (
    <Container>
      <PvTitle necessary={Boolean(necessary.length)} header={surveyData.header}></PvTitle>
      {surveyData.questions.map((question, idx) => {
        return <PvQuestion question={question} qIdx={idx} />;
      })}
      <ButtonWrap>
        <Button>제출</Button>
        <DeleteAnswer>양식 지우기</DeleteAnswer>
      </ButtonWrap>
    </Container>
  );
};

export default Preview;

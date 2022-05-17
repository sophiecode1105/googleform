import styled from 'styled-components';
import PvTitle from '../components/Preview/PvTitle';
import { useEffect } from 'react';
import PvQuestion from '../components/Preview/PvQuestion';
import { Button, ButtonWrap, DeleteAnswer } from '../style/button';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { changeSubmitState, resetAllAnswerData, updateAllData } from '../state/survey';
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

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('preview') || '');
    dispatch(updateAllData({ surveyData: data }));
  }, []);

  const changePageToResult = () => {
    dispatch(changeSubmitState({ submitState: true }));
    let necessaryQuestions = surveyData.questions.filter((question) => {
      return question.necessary;
    });
    let emptyAnswers = necessaryQuestions.filter((el) => {
      return el.answer === '';
    });
    if (emptyAnswers.length !== 0) {
      return;
    } else {
      localStorage.setItem('result', JSON.stringify(surveyData));
      window.open('/result', '_blank');
    }
  };

  const clearForm = () => {
    dispatch(resetAllAnswerData());
  };

  return (
    <Container>
      <PvTitle necessary={Boolean(necessary.length)} header={surveyData.header} />
      {surveyData.questions.map((question, idx) => {
        return <PvQuestion isSubmit={isSubmit} question={question} qIdx={idx} key={`pv-q-${idx}`} />;
      })}
      <ButtonWrap>
        <Button onClick={changePageToResult}>제출</Button>
        <DeleteAnswer onClick={clearForm}>양식 지우기</DeleteAnswer>
      </ButtonWrap>
    </Container>
  );
};

export default Preview;

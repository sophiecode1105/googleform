import { useState } from 'react';
import { surveyState } from '../model/typeDefs';
import styled from 'styled-components';
import PvTitle from '../components/Preview/pvTitle';
import PvQuestion from '../components/Preview/pvQuestion';

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const Result = () => {
  const [surveyAnswer, setSurveyAnswer] = useState<surveyState>(JSON.parse(localStorage.getItem('result') || ''));

  const necessary = surveyAnswer.questions.filter((question) => {
    return question.necessary;
  });

  const isSubmit = surveyAnswer.submit;

  console.log('서베이데이타', surveyAnswer);

  return (
    <Container>
      <PvTitle necessary={Boolean(necessary.length)} header={surveyAnswer.header} />
      {surveyAnswer.questions.map((question, idx) => {
        return <PvQuestion isSubmit={isSubmit} question={question} qIdx={idx} />;
      })}
    </Container>
  );
};
export default Result;

import { useState } from 'react';
import { surveyState } from '../model/typeDefs';
import styled from 'styled-components';
import PvTitle from '../components/Preview/PvTitle';
import PvQuestion from '../components/Preview/PvQuestion';

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

  return (
    <Container>
      <PvTitle necessary={Boolean(necessary.length)} header={surveyAnswer.header} />
      {surveyAnswer.questions.map((question, idx) => {
        return <PvQuestion key={`rs-q-${idx}`} isSubmit={isSubmit} question={question} qIdx={idx} />;
      })}
    </Container>
  );
};
export default Result;

import styled from 'styled-components';
import PvTitle from '../components/Preview/pvTitle';
import { useEffect, useState } from 'react';
import { surveyState } from '../model/typeDefs';
import PvQuestion from '../components/Preview/pvQuestion';

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const Preview = () => {
  const [surveyData, setSurveyData] = useState<surveyState | undefined>(undefined);

  let necessary = surveyData?.questions.filter((question) => {
    return question.necessary;
  });
  console.log('네세세리', necessary);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('preview') || '');
    setSurveyData(data);
  }, []);

  return (
    <Container>
      <PvTitle necessary={Boolean(necessary?.length)} header={surveyData?.header}></PvTitle>
      {surveyData?.questions.map((question) => {
        return <PvQuestion question={question} />;
      })}
    </Container>
  );
};

export default Preview;

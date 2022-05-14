import Question from '../components/Question/question';
import Title from '../components/Title/title';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const Main = () => {
  const questionList = useSelector((state: RootState) => state.surveyData.questions);
  console.log(questionList);
  return (
    <Container>
      <Title />
      {questionList.map((question, idx) => {
        return <Question question={question} idx={idx} key={`q-${idx}`} />;
      })}
    </Container>
  );
};
export default Main;

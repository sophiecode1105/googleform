import Question from '../components/Main/Question/question';
import Title from '../components/Main/Title/title';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import AddButton from '../components/Main/addButton';

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto 20% auto;
`;

const Main = () => {
  const questionList = useSelector((state: RootState) => state.surveyData.questions);

  return (
    <Container>
      <Title />
      {questionList.map((question, idx) => {
        return <Question question={question} idx={idx} key={`q-${idx}`} />;
      })}
      <AddButton />
    </Container>
  );
};
export default Main;

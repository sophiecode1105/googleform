import Question from '../components/Question/question';
import Title from '../components/Title/title';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <Container>
      <Title />
      <Question />
    </Container>
  );
};
export default Main;

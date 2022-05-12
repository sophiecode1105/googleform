import styled from 'styled-components';
import document_men from '../../assets/document_men.png';
import document_women from '../../assets/document_women.png';
import survey_men from '../../assets/survey_men.png';
import survey_women from '../../assets/survey_women.png';

const Container = styled.div`
  width: 100%;
  height: 5em;
  background-color: #fff;
`;

const Img = styled.img`
  height: 5rem;

  object-fit: fill;
`;

const NavBar = () => {
  return (
    <Container>
      <Img src={document_men} />
      <Img src={document_women} />
      <Img src={survey_men} />
      <Img src={survey_women} />
    </Container>
  );
};
export default NavBar;

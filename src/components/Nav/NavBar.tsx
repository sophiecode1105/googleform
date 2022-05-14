import document_men from '../../assets/document_men.png';
import document_women from '../../assets/document_women.png';
import survey_men from '../../assets/survey_men.png';
import survey_women from '../../assets/survey_women.png';
import eye from '../../assets/eye.png';
import { Container, IllustImg, IllustImgWrap, PreviewImg } from '../../style/navSt';

const NavBar = () => {
  const srcList = [document_men, document_women, survey_men, survey_women];

  return (
    <Container>
      <IllustImgWrap>
        {srcList.map((img) => {
          return <IllustImg src={img} />;
        })}
      </IllustImgWrap>
      <PreviewImg src={eye} />
    </Container>
  );
};
export default NavBar;

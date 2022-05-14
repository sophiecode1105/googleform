import document_men from '../../assets/document_men.png';
import document_women from '../../assets/document_women.png';
import survey_men from '../../assets/survey_men.png';
import survey_women from '../../assets/survey_women.png';
import eye from '../../assets/eye.png';
import { Container, IllustImg, IllustImgWrap, PreviewImg } from '../../style/navSt';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();
  const srcList = [document_men, document_women, survey_men, survey_women];

  const surveyData = useSelector((state: RootState) => state.surveyData);

  const pageMoveToPreview = () => {
    localStorage.setItem('preview', JSON.stringify(surveyData));
    window.open('/preview', '_blank');
  };

  return (
    <Container>
      <IllustImgWrap>
        {srcList.map((img) => {
          return <IllustImg src={img} />;
        })}
      </IllustImgWrap>
      {pathname === '/' ? <PreviewImg src={eye} onClick={() => pageMoveToPreview()} /> : null}
    </Container>
  );
};
export default NavBar;

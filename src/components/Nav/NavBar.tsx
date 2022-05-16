import document_men from '../../assets/document_men.png';
import document_women from '../../assets/document_women.png';
import survey_men from '../../assets/survey_men.png';
import survey_women from '../../assets/survey_women.png';
import short from '../../assets/short.png';
import { AddImg, Container, IllustImg, IllustImgWrap, PreviewImg } from '../../style/navSt';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { useLocation } from 'react-router-dom';
import { addQuestionList } from '../../state/survey';
import { useAppDispatch } from '../../state/hook';

const NavBar = () => {
  const { pathname } = useLocation();
  const srcList = [document_men, document_women, survey_men, survey_women];

  const surveyData = useSelector((state: RootState) => state.surveyData);
  const dispatch = useAppDispatch();

  const pageMoveToPreview = () => {
    localStorage.setItem('preview', JSON.stringify(surveyData));
    window.open('/preview', '_blank');
  };

  const addQuestion = () => {
    let newQuestion = {
      title: '',
      answer: '',
      optionType: {
        typeTitle: '단답형',
        sort: 'short-text',
        img: short,
      },
      necessary: false,
      optionList: [
        {
          content: '옵션 1',
          order: 1,
        },
      ],
      submit: false,
    };

    dispatch(addQuestionList({ newQuestion }));
  };

  return (
    <Container>
      <IllustImgWrap>
        {srcList.map((img) => {
          return <IllustImg src={img} />;
        })}
        <AddImg onClick={addQuestion} className="fa-solid fa-circle-plus" />
        {pathname === '/' ? <PreviewImg className="fa-solid fa-eye" onClick={() => pageMoveToPreview()} /> : null}
      </IllustImgWrap>
    </Container>
  );
};
export default NavBar;

import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useAppDispatch } from '../state/hook';
import { addQuestionList } from '../state/survey';
import { Button, Container } from '../style/button';

const AddButton = () => {
  const dispatch = useAppDispatch();
  const questions = useSelector((state: RootState) => state.surveyData.questions);
  console.log(questions);

  const addQuestion = () => {
    let newQuestion = {
      title: '',
      optionType: '단답형',
      optionList: [
        {
          content: '옵션 1',
          order: 1,
        },
      ],
    };
    let newList = [...questions, newQuestion];
    dispatch(addQuestionList({ list: newList }));
  };

  return (
    <Container>
      <Button onClick={addQuestion}>질문 추가</Button>
    </Container>
  );
};
export default AddButton;

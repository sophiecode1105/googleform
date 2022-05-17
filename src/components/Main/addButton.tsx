import { useAppDispatch } from '../../state/hook';
import { addQuestionList } from '../../state/survey';
import { Button, Container } from '../../style/button';
import short from '../../assets/short.png';

const AddButton = () => {
  const dispatch = useAppDispatch();

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
      <Button onClick={addQuestion}>질문 추가</Button>
    </Container>
  );
};
export default AddButton;

import { useAppDispatch } from '../../state/hook';
import { addQuestionList } from '../../state/survey';
import { Button, Container } from '../../style/buttonSt';
import short from '../../assets/short.png';

const AddButton = () => {
  const dispatch = useAppDispatch();

  const addQuestion = () => {
    let newQuestion = {
      title: '',
      optionType: {
        typeTitle: '단답형',
        sort: 'short',
        img: short,
      },
      necessary: false,
      optionList: [
        {
          content: '옵션 1',
          order: 1,
        },
      ],
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

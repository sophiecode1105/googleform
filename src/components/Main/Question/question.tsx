import { useAppDispatch } from '../../../state/hook';
import { question } from '../../../model/typeDefs';
import { Container, QuesTitleInput, QuesWrap } from '../../../style/question';
import Answer from './Answer/Answer';
import ExtraFeature from './Extra/ExtraFeature';
import QuestionType from './QuestionType';
import { changeQuestionTitle } from '../../../state/survey';

const Question = ({ question, idx }: { question: question; idx: number }) => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <QuesWrap>
        <QuesTitleInput
          type="text"
          placeholder="질문"
          value={question.title}
          onChange={(event) => {
            dispatch(changeQuestionTitle({ qIdx: idx, title: event.target.value }));
          }}
        />
        <QuestionType questionType={question.optionType} qIdx={idx} />
      </QuesWrap>
      <Answer optionType={question.optionType.typeTitle} optionList={question.optionList} qIdx={idx} />
      <ExtraFeature question={question} qIdx={idx} />
    </Container>
  );
};
export default Question;

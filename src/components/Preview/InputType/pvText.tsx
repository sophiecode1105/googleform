import { question } from '../../../model/typeDefs';
import { useAppDispatch } from '../../../state/hook';
import { updateAnswerData } from '../../../state/survey';
import { AnswerInput, ErrorMessage, Exclamation } from '../../../style/questionSt';

const PvText = ({ question, sort, qIdx }: { question: question; sort: string; qIdx: number }) => {
  const dispatch = useAppDispatch();

  return (
    <AnswerInput
      type="text"
      placeholder="내 답변"
      value={question.answer}
      short={sort === 'short-text'}
      onChange={(event) => {
        dispatch(updateAnswerData({ qIdx, answer: event.target.value }));
      }}
    />
  );
};
export default PvText;

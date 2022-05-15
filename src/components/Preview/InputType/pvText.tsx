import { question } from '../../../model/typeDefs';
import { useAppDispatch } from '../../../state/hook';
import { updateAnswerData } from '../../../state/survey';
import { AnswerInput, AnswerTextArea, ErrorMessage, Exclamation } from '../../../style/questionSt';

const PvText = ({ question, sort, qIdx }: { question: question; sort: string; qIdx: number }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {sort === 'short-text' ? (
        <AnswerInput
          type="text"
          placeholder="내 답변"
          value={question.answer}
          onChange={(event) => {
            dispatch(updateAnswerData({ qIdx, answer: event.target.value }));
          }}
        />
      ) : (
        <AnswerTextArea
          value={question.answer}
          placeholder="내 답변"
          onChange={(event) => {
            dispatch(updateAnswerData({ qIdx, answer: event.target.value }));
          }}
          lines={String(question.answer).split('\n').length}
        />
      )}
    </>
  );
};
export default PvText;

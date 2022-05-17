import { useLocation } from 'react-router-dom';
import { question } from '../../../model/typeDefs';
import { useAppDispatch } from '../../../state/hook';
import { updateAnswerData } from '../../../state/survey';
import { AnswerInput, AnswerTextArea, ErrorMessage, Exclamation } from '../../../style/question';

const PvText = ({ question, sort, qIdx }: { question: question; sort: string; qIdx: number }) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  return (
    <>
      {sort === 'short-text' ? (
        <AnswerInput
          readOnly={pathname === '/result'}
          result={pathname === '/result'}
          type="text"
          placeholder={pathname === '/result' ? '' : '내 답변'}
          value={question.answer}
          onChange={(event) => {
            dispatch(updateAnswerData({ qIdx, answer: event.target.value }));
          }}
        />
      ) : (
        <AnswerTextArea
          readOnly={pathname === '/result'}
          result={pathname === '/result'}
          value={question.answer}
          placeholder={pathname === '/result' ? '' : '내 답변'}
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

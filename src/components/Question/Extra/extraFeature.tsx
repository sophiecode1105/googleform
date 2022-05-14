import { useAppDispatch } from '../../../state/hook';
import { addQuestionList, removeQuestionFromQuestions } from '../../../state/survey';
import { ExtraContainer, ExtraIcon, ExtraIconWrap, Line, Text } from '../../../style/extraSt';
import lodash from 'lodash';
import Toggle from './toggle';
import { question } from '../../../model/typeDefs';

const ExtraFeature = ({ question, qIdx }: { question: question; qIdx: number }) => {
  const dispatch = useAppDispatch();

  const copyQuestionToQuestions = (qIdx: number) => {
    const copiedByLodash = lodash.cloneDeep(question); // 참조를 끊게 하기위해 deepClone을 해야한다. 깊은복사를 해주는 라이브러리(lodash)
    dispatch(addQuestionList({ newQuestion: copiedByLodash }));
  };

  const deleteQuestionFromQeustions = (qIdx: number) => {
    dispatch(removeQuestionFromQuestions({ qIdx }));
  };

  return (
    <ExtraContainer>
      <ExtraIconWrap onClick={() => copyQuestionToQuestions(qIdx)} className="fa-regular fa-copy">
        <span>
          <ExtraIcon />
        </span>
      </ExtraIconWrap>
      <ExtraIconWrap onClick={() => deleteQuestionFromQeustions(qIdx)} className="fa-regular fa-trash-can">
        <span>
          <ExtraIcon />
        </span>
      </ExtraIconWrap>

      <Line> </Line>
      <Text>필수</Text>
      <Toggle isOn={question.necessary} qIdx={qIdx} />
    </ExtraContainer>
  );
};
export default ExtraFeature;

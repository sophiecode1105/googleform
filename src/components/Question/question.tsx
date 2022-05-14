import { useEffect, useState } from 'react';
import { question } from '../../model/typeDefs';
import { Container, QuesTitle, QuesWrap } from '../../style/questionSt';
import Answer from './Answer/answer';
import ExtraFeature from './Extra/extraFeature';
import QuestionType from './questionType';

const Question = ({ question, idx }: { question: question; idx: number }) => {
  const [Ques, setQues] = useState<string>('');

  return (
    <Container>
      <QuesWrap>
        <QuesTitle
          type="text"
          placeholder="질문"
          onChange={(event) => {
            setQues(event.target.value);
          }}
        />
        <QuestionType qIdx={idx} />
      </QuesWrap>
      <Answer optionType={question.optionType} optionList={question.optionList} qIdx={idx} />
      <ExtraFeature />
    </Container>
  );
};
export default Question;

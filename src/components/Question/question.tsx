import { useEffect, useState } from 'react';
import { Container, QuesTitle, QuesWrap } from '../../style/questionSt';
import Answer from './Answer/answer';
import QuestionType from './questionType';

const Question = () => {
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
        <QuestionType />
      </QuesWrap>
      <Answer />
    </Container>
  );
};
export default Question;

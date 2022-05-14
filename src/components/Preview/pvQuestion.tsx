import { question } from '../../model/typeDefs';
import { useForm } from 'react-hook-form';
import {
  Container,
  PvQuesWrap,
  QuesTitle,
  SelectInput,
  SelectLabel,
  SelectListWrap,
  SelectWrap,
} from '../../style/questionSt';
import PvSelect from './pvSelect';

const PvQuestion = ({ question }: { question: question }) => {
  let title = question.title;
  let necessary = question.necessary;
  let questions = question.optionList;
  let sort = question.optionType.sort;

  return (
    <Container>
      <PvQuesWrap>
        <QuesTitle>{title}</QuesTitle>
        <SelectListWrap>
          {questions.map((option) => {
            console.log('option', option);
            return <PvSelect necessary={necessary} sort={sort} option={option} />;
          })}
        </SelectListWrap>
      </PvQuesWrap>
    </Container>
  );
};
export default PvQuestion;

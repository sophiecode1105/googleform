import { question } from '../../model/typeDefs';
import { Container, ErrorMessage, Exclamation, PvQuesWrap, QuesTitle, SelectListWrap } from '../../style/questionSt';
import PvSelect from './pvSelect';
import PvDropDown from './InputType/pvDropDown';
import lodash from 'lodash';
import PvText from './InputType/pvText';

const PvQuestion = ({ isSubmit, question, qIdx }: { isSubmit: boolean; question: question; qIdx: number }) => {
  let title = question.title;
  let necessary = question.necessary;
  let questions = question.optionList;
  let sort = question.optionType.sort;

  let dropList = lodash.cloneDeep(questions);
  dropList.unshift({ content: '선택', order: 0 });

  console.log(question.answer);

  return (
    <Container>
      <PvQuesWrap>
        <QuesTitle>
          {title} {necessary ? <span>*</span> : null}
        </QuesTitle>
        <SelectListWrap>
          {sort.includes('text') ? (
            <PvText question={question} sort={sort} qIdx={qIdx} />
          ) : sort.includes('drop') ? (
            <PvDropDown qIdx={qIdx} options={dropList} answer={question.answer} />
          ) : (
            questions.map((option, idx) => {
              console.log('option', option);
              return (
                <PvSelect
                  qIdx={qIdx}
                  title={title}
                  sort={sort}
                  option={option}
                  key={idx}
                  answer={question.answer}
                  idx={idx}
                />
              );
            })
          )}
        </SelectListWrap>
        {isSubmit && necessary && !question.answer ? (
          <ErrorMessage>
            <Exclamation className="fas fa-exclamation-circle" />
            필수 질문입니다.
          </ErrorMessage>
        ) : null}
      </PvQuesWrap>
    </Container>
  );
};
export default PvQuestion;

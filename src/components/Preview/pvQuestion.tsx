import { question } from '../../model/typeDefs';
import { Container, ErrorMessage, Exclamation, PvQuesWrap, QuesTitle, SelectListWrap } from '../../style/question';
import PvSelect from './PvSelect';
import PvDropDown from './InputType/PvDropDown';
import lodash from 'lodash';
import PvText from './InputType/PvText';

const PvQuestion = ({ isSubmit, question, qIdx }: { isSubmit: boolean; question: question; qIdx: number }) => {
  let title = question.title;
  let necessary = question.necessary;
  let questions = question.optionList;
  let sort = question.optionType.sort;

  let dropList = lodash.cloneDeep(questions);
  dropList.unshift({ content: '선택', order: 0 });

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
              return (
                <PvSelect
                  qIdx={qIdx}
                  title={title}
                  sort={sort}
                  option={option}
                  key={`pv-option-${idx}`}
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

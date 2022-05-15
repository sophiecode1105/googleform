import { question } from '../../model/typeDefs';
import { useForm } from 'react-hook-form';
import { AnswerInput, Container, PvQuesWrap, QuesTitle, SelectListWrap } from '../../style/questionSt';
import PvSelect from './pvSelect';
import PvDropDown from './pvDropDown';
import lodash from 'lodash';

const PvQuestion = ({ question, qIdx }: { question: question; qIdx: number }) => {
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
            <AnswerInput type="text" placeholder="내 답변" short={sort === 'short-text'} />
          ) : sort.includes('drop') ? (
            <PvDropDown options={dropList} />
          ) : (
            questions.map((option, idx) => {
              console.log('option', option);
              return <PvSelect qIdx={qIdx} title={title} necessary={necessary} sort={sort} option={option} />;
            })
          )}
        </SelectListWrap>
      </PvQuesWrap>
    </Container>
  );
};
export default PvQuestion;

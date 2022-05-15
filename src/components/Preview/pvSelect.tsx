import { option } from '../../model/typeDefs';
import { useAppDispatch } from '../../state/hook';
import { updateAnswerData } from '../../state/survey';
import { CheckInput, RadioInput, SelectLabel, SelectWrap } from '../../style/questionSt';

const PvSelect = ({
  answer,
  title,
  sort,
  option,
  qIdx,
}: {
  answer: string | string[];
  title: string;
  sort: string;
  option: option;
  qIdx: number;
}) => {
  const dispatch = useAppDispatch();
  let name = title + qIdx;

  const updateCheckBoxAnswer = () => {
    if (Array.isArray(answer)) {
      if (answer.includes(option.content)) {
        let deletedItemList = answer.filter((item) => {
          return item !== option.content;
        });
        dispatch(updateAnswerData({ qIdx, answer: deletedItemList }));
      } else {
        let addedItemList = [...answer, option.content];
        dispatch(updateAnswerData({ qIdx, answer: addedItemList }));
      }
    } else {
      dispatch(updateAnswerData({ qIdx, answer: [option.content] }));
    }
  };

  console.log('order', typeof option.order);
  return (
    <SelectWrap>
      {sort === 'checkbox' ? <CheckInput onClick={updateCheckBoxAnswer} type={sort} /> : null}
      {sort === 'radio' ? (
        <RadioInput
          onClick={() => {
            dispatch(updateAnswerData({ qIdx, answer: option.content }));
          }}
          name={name}
          type={sort}
        />
      ) : null}
      <SelectLabel>{option.content}</SelectLabel>
    </SelectWrap>
  );
};
export default PvSelect;

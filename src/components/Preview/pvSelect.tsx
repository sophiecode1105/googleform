import { option } from '../../model/typeDefs';
import { useForm } from 'react-hook-form';
import { CheckInput, RadioInput, SelectLabel, SelectWrap } from '../../style/questionSt';

const PvSelect = ({
  title,
  necessary,
  sort,
  option,
  qIdx,
}: {
  title: string;
  necessary: boolean;
  sort: string;
  option: option;
  qIdx: number;
}) => {
  let name = title + qIdx;
  return (
    <SelectWrap>
      {sort === 'checkbox' ? <CheckInput type={sort} /> : null}
      {sort === 'radio' ? <RadioInput name={name} type={sort} /> : null}
      <SelectLabel>{option.content}</SelectLabel>
    </SelectWrap>
  );
};
export default PvSelect;

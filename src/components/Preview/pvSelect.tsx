import { option } from '../../model/typeDefs';
import { useForm } from 'react-hook-form';
import { SelectInput, SelectLabel, SelectWrap } from '../../style/questionSt';

const PvSelect = ({ necessary, sort, option }: { necessary: boolean; sort: string; option: option }) => {
  return (
    <SelectWrap>
      <SelectInput type={sort} />
      <SelectLabel>{option.content}</SelectLabel>
    </SelectWrap>
  );
};
export default PvSelect;

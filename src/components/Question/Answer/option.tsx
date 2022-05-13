import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../state/hook';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { changeOptionTitle, updateOptionList } from '../../../state/survey';
import { OptionIcon, OptionInput, OptionWrap } from '../../../style/questionSt';

const Option = ({ idx }: { idx: number }) => {
  const dispatch = useAppDispatch();
  const optionList = useSelector((state: RootState) => state.surveyData.question.optionList);
  console.log('옵션리슽', optionList);

  const defaultText = '옵션' + String(idx + 1);
  const [text, setText] = useState<string>(defaultText);
  const [writing, setWriting] = useState<boolean>(false);

  useEffect(() => {
    dispatch(changeOptionTitle({ idx: idx, content: text }));
  }, [text]);

  const deleteList = (idxToRemove: number) => {
    dispatch(updateOptionList({ list: optionList.filter((item) => idxToRemove !== optionList.indexOf(item)) }));
  };

  return (
    <OptionWrap>
      <OptionIcon className="fa-regular fa-circle" />
      <OptionInput
        type="text"
        value={writing === false && !text ? defaultText : text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        onFocus={() => {
          setWriting(true);
        }}
        onBlur={() => {
          setWriting(false);
          if (!text) {
            setText(defaultText);
          }
        }}
      />
      <OptionIcon onClick={() => deleteList(idx)} className="fa-solid fa-xmark" />
    </OptionWrap>
  );
};

export default Option;

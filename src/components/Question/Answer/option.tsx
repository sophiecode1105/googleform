import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../state/hook';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { changeOptionTitle, updateOptionList } from '../../../state/survey';
import { OptionIcon, OptionInput, OptionNum, OptionWrap } from '../../../style/questionSt';
import { setConstantValue } from 'typescript';

const Option = ({
  optionTitle,
  iconClassName,
  item,
  idx,
}: {
  optionTitle: string;
  iconClassName: string;
  item: { content: string; order: number };
  idx: number;
}) => {
  const dispatch = useAppDispatch();
  const optionList = useSelector((state: RootState) => state.surveyData.question.optionList);

  let defaultText = '';

  useEffect(() => {
    if (item.content === '기타...') {
      setText('기타...');
    } else {
      defaultText = '옵션 ' + item.order;
      setText(defaultText);
    }
  }, [item.order]);

  const [text, setText] = useState<string>(defaultText);
  const [writing, setWriting] = useState<boolean>(false);

  useEffect(() => {
    dispatch(changeOptionTitle({ idx: idx, content: text }));
  }, [text]);

  const deleteList = (idxToRemove: number) => {
    let newList = optionList.filter((el, idx) => idx !== idxToRemove);
    dispatch(
      updateOptionList({
        list: newList,
      })
    );
  };

  return (
    <OptionWrap>
      {optionTitle === '드롭다운' ? <OptionNum>{idx + 1}</OptionNum> : <OptionIcon className={iconClassName} />}
      <OptionInput
        type="text"
        value={writing === false && !text ? item.content : text}
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
      {item.order === -1 && optionList.length === 2 ? (
        <OptionIcon
          onClick={() => {
            deleteList(idx);
          }}
          className="fa-solid fa-xmark"
        />
      ) : null}
      {optionList.length !== 1 && optionList.length !== 2 ? (
        <OptionIcon
          onClick={() => {
            deleteList(idx);
          }}
          className="fa-solid fa-xmark"
        />
      ) : null}
    </OptionWrap>
  );
};

export default Option;

import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../state/hook';
import { changeOptionTitle, removeItemFromOptionList } from '../../../state/survey';
import { OptionIcon, OptionInput, OptionNum, OptionWrap } from '../../../style/questionSt';

const Option = ({
  optionType,
  iconClassName,
  item,
  qIdx,
  idx,
  cancellable,
}: {
  optionType: string;
  iconClassName: string;
  item: { content: string; order: number };
  qIdx: number;
  idx: number;
  cancellable: boolean;
}) => {
  let defaultText = item.content ? item.content : '';
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>(defaultText);
  const [writing, setWriting] = useState<boolean>(false);

  useEffect(() => {
    if (item.content === '기타...') {
      setText('기타...');
    } else if (item.content) {
      defaultText = item.content;
    } else {
      defaultText = '옵션 ' + item.order;
      setText(defaultText);
    }
  }, [item.order]);

  useEffect(() => {
    dispatch(changeOptionTitle({ qIdx, idx, content: text }));
  }, [text]);

  const deleteItem = (idxToRemove: number) => {
    dispatch(
      removeItemFromOptionList({
        qIdx,
        itemIdx: idx,
      })
    );
  };

  console.log('아이템', item);

  return (
    <OptionWrap>
      {optionType === '드롭다운' ? <OptionNum>{idx + 1}</OptionNum> : <OptionIcon className={iconClassName} />}
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
      <OptionIcon
        onClick={() => {
          deleteItem(idx);
        }}
        className={cancellable ? 'fa-solid fa-xmark' : "'"}
      />
    </OptionWrap>
  );
};

export default Option;

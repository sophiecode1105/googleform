import { uniq } from 'lodash';
import { useEffect, useState } from 'react';
import { option, question } from '../../../../model/typeDefs';
import { useAppDispatch } from '../../../../state/hook';
import { changeOptionTitle, removeItemFromOptionList } from '../../../../state/survey';
import { Exclamation, OptionIcon, OptionInput, OptionNum, OptionWrap } from '../../../../style/question';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../state/store';

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
  const [isUnique, setIsUnique] = useState<boolean>(true);
  const surveyData = useSelector((state: RootState) => state.surveyData);

  useEffect(() => {
    setText(item.content);
  }, [item.content]);

  useEffect(() => {
    if (item.content) {
      defaultText = item.content;
    } else {
      defaultText = '옵션 ' + item.order;
      setText(defaultText);
    }
  }, [item.order]);

  useEffect(() => {
    let unique =
      surveyData.questions[qIdx].optionList.filter((el, i) => el.content.trim() === text.trim() && i !== idx).length ===
      0;
    if (unique) {
      dispatch(changeOptionTitle({ qIdx, idx, content: text }));
    }
    setIsUnique(unique);
  }, [text]);

  const deleteItem = (idxToRemove: number) => {
    dispatch(
      removeItemFromOptionList({
        qIdx,
        itemIdx: idx,
      })
    );
  };

  return (
    <OptionWrap>
      {optionType === '드롭다운' ? <OptionNum>{idx + 1}</OptionNum> : <OptionIcon className={iconClassName} />}
      <OptionInput
        type="text"
        readOnly={item.order === -1}
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
            setText('옵션 ' + item.order);
          } else if (!isUnique) {
            setText('옵션 ' + String(item.order));
          }
        }}
      />

      <OptionIcon
        onClick={() => {
          deleteItem(idx);
        }}
        className={cancellable ? 'fa-solid fa-xmark' : "'"}
      />

      {!isUnique ? (
        <>
          <Exclamation className="fa-solid fa-triangle-exclamation" />
          <span>중복!</span>
        </>
      ) : null}
    </OptionWrap>
  );
};

export default Option;

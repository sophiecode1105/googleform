import { useAppDispatch } from '../../../state/hook';
import Option from './option';
import { updateOptionList } from '../../../state/survey';
import { option } from '../../../model/typeDefs';
import {
  AddOptionInput,
  AddWrap,
  Explain,
  ExplainContainer,
  OptionIcon,
  OptionListWrap,
  OptionNum,
  OptionWrap,
  TextDiv,
} from '../../../style/questionSt';

const Answer = ({ optionType, optionList, qIdx }: { optionType: string; optionList: option[]; qIdx: number }) => {
  const dispatch = useAppDispatch();
  let iconClassName = '';
  if (optionType === '객관식 질문') {
    iconClassName = 'fa-regular fa-circle';
  } else if (optionType === '체크박스') {
    iconClassName = 'fa-regular fa-square';
  }

  const addList = () => {
    let newItem = { content: '옵션 ' + (optionList.length + 1), order: optionList.length + 1 };
    let newList;
    if (optionList[optionList.length - 1].order === -1) {
      newList = optionList
        .filter((item) => item.order !== -1)
        .concat(newItem)
        .concat(optionList.filter((item) => item.order === -1));
    } else {
      newList = [...optionList, newItem];
    }

    dispatch(
      updateOptionList({
        qIdx,
        list: newList,
      })
    );
  };

  const addEtc = () => {
    let newList = [...optionList, { content: '기타...', order: -1 }];
    dispatch(
      updateOptionList({
        qIdx,
        list: newList,
      })
    );
  };

  return (
    <ExplainContainer>
      {optionType === '장문형' || optionType === '단답형' ? (
        <Explain>{`${optionType} 텍스트`}</Explain>
      ) : (
        <OptionListWrap>
          {optionList.map((item, idx) => {
            let cancellable = true;
            let containsEtc = optionList.filter((el) => el.order === -1).length;
            let isEtc = item.order === -1;

            if (isEtc) {
              cancellable = true;
            } else {
              if (optionList.length <= 1) {
                cancellable = false;
              }
              if (optionList.length === 2 && containsEtc) {
                cancellable = false;
              }
            }

            return (
              <Option
                optionType={optionType}
                iconClassName={iconClassName}
                item={item}
                qIdx={qIdx}
                idx={idx}
                cancellable={cancellable}
              />
            );
          })}
          <OptionWrap>
            {optionType === '드롭다운' ? (
              <OptionNum>{optionList.length + 1}</OptionNum>
            ) : (
              <OptionIcon className={iconClassName} />
            )}
            <AddWrap>
              <AddOptionInput type="text" value="옵션 추가" onClick={addList} />
              {optionList[optionList.length - 1].order === -1 ? null : (
                <>
                  <TextDiv>또는</TextDiv>
                  <TextDiv onClick={addEtc}>'기타' 추가</TextDiv>
                </>
              )}
            </AddWrap>
          </OptionWrap>
        </OptionListWrap>
      )}
    </ExplainContainer>
  );
};

export default Answer;

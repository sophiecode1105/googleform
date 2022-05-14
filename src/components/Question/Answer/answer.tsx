import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../state/hook';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
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
import Option from './option';
import { updateOptionList } from '../../../state/survey';
import { has } from 'immer/dist/internal';

const Answer = () => {
  const dispatch = useAppDispatch();
  const optionTitle = useSelector((state: RootState) => state.surveyData.question.optionType);
  const optionList = useSelector((state: RootState) => state.surveyData.question.optionList);
  let iconClassName = '';

  if (optionTitle === '객관식 질문') {
    iconClassName = 'fa-regular fa-circle';
  } else if (optionTitle === '체크박스') {
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
        list: newList,
      })
    );
  };

  const addEtc = () => {
    let newList = [...optionList, { content: '기타...', order: -1 }];

    dispatch(
      updateOptionList({
        list: newList,
      })
    );
  };

  return (
    <ExplainContainer>
      {optionTitle === '장문형' || optionTitle === '단답형' ? (
        <Explain>{`${optionTitle} 텍스트`}</Explain>
      ) : (
        <OptionListWrap>
          {optionList.map((item, idx) => {
            return <Option optionTitle={optionTitle} iconClassName={iconClassName} item={item} idx={idx} />;
          })}
          <OptionWrap>
            {optionTitle === '드롭다운' ? (
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

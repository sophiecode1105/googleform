import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../state/hook';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import {
  AddOptionInput,
  Explain,
  ExplainContainer,
  OptionIcon,
  OptionListWrap,
  OptionWrap,
} from '../../../style/questionSt';
import Option from './option';
import { updateOptionList } from '../../../state/survey';

const Answer = () => {
  const dispatch = useAppDispatch();
  const optionTitle = useSelector((state: RootState) => state.surveyData.question.optionType);
  const optionList = useSelector((state: RootState) => state.surveyData.question.optionList);
  console.log(optionList);

  const addList = () => {
    dispatch(updateOptionList({ list: [...optionList, `옵션${optionList.length}`] }));
  };

  return (
    <ExplainContainer>
      {optionTitle === '장문형' || optionTitle === '단답형' ? <Explain>{`${optionTitle} 텍스트`}</Explain> : null}
      {optionTitle === '객관식 질문' ? (
        <OptionListWrap>
          {optionList.map((item, idx) => {
            return <Option idx={idx} />;
          })}
          <OptionWrap>
            <OptionIcon className="fa-regular fa-circle" />
            <AddOptionInput type="text" value="옵션 추가" onClick={addList} />
          </OptionWrap>
        </OptionListWrap>
      ) : null}
    </ExplainContainer>
  );
};

export default Answer;

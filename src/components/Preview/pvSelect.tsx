import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { option } from '../../model/typeDefs';
import { useAppDispatch } from '../../state/hook';
import { updateAnswerData } from '../../state/survey';
import { CheckInput, RadioInput, SelectLabel, SelectWrap } from '../../style/question';

const PvSelect = ({
  answer,
  title,
  sort,
  option,
  qIdx,
  idx,
}: {
  answer: string | string[];
  title: string;
  sort: string;
  option: option;
  qIdx: number;
  idx: number;
}) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation(); //컴포넌트 재활용을 위하여 RESULT페이지일때 와 아닐때를 구분하여준다.

  const checkRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const radioRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  let name = title + qIdx;
  let radioId = option.content + qIdx + idx + '라디오';
  let checkId = option.content + qIdx + idx + '체크';

  useEffect(() => {
    if (typeof answer === 'string') {
      if (answer.includes(option.content)) {
        const radiobuttonValue = document.getElementById(radioId) as HTMLInputElement;
        radiobuttonValue.checked = true;
      } else if (answer === '') {
        if (radioRef?.current?.checked) {
          radioRef.current.checked = false;
        }
        if (checkRef?.current?.checked) {
          checkRef.current.checked = false;
        }
      }
    }
    if (Array.isArray(answer)) {
      if (answer.includes(option.content)) {
        const checkBoxValue = document.getElementById(checkId) as HTMLInputElement;
        checkBoxValue.checked = true;
      }
    }
  }, [answer]);

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

  return (
    <SelectWrap>
      {sort === 'checkbox' ? (
        <CheckInput
          ref={checkRef}
          id={checkId}
          result={pathname === '/result'}
          onClick={(e) => {
            if (pathname === '/result') {
              e.preventDefault();
            } else {
              updateCheckBoxAnswer();
            }
          }}
          type={sort}
        />
      ) : null}
      {sort === 'radio' ? (
        <RadioInput
          ref={radioRef}
          onClick={(e) => {
            if (pathname === '/result') {
              e.preventDefault();
            } else {
              dispatch(updateAnswerData({ qIdx, answer: option.content }));
            }
          }}
          id={radioId}
          name={name}
          type={sort}
          result={pathname === '/result'}
        />
      ) : null}
      <SelectLabel>{option.content}</SelectLabel>
    </SelectWrap>
  );
};
export default PvSelect;

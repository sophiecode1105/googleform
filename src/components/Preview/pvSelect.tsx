import path from 'path';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { option } from '../../model/typeDefs';
import { useAppDispatch } from '../../state/hook';
import { updateAnswerData } from '../../state/survey';
import { CheckInput, RadioInput, SelectLabel, SelectWrap } from '../../style/questionSt';

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
  const { pathname } = useLocation();

  console.log('정답을알려줘~', answer);

  let name = title + qIdx;
  let radioId = option.content + qIdx + idx + '라디오';
  let checkId = option.content + qIdx + idx + '체크';

  useEffect(() => {
    if (pathname === '/result' && typeof answer === 'string') {
      if (answer.includes(option.content)) {
        const radiobuttonValue = document.getElementById(radioId) as HTMLInputElement;
        radiobuttonValue.checked = true;
      }
    }
    if (pathname == '/result' && Array.isArray(answer)) {
      if (answer.includes(option.content)) {
        const checkBoxValue = document.getElementById(checkId) as HTMLInputElement;
        checkBoxValue.checked = true;
      }
    }
  }, []);

  const updateCheckBoxAnswer = () => {
    console.log('찍히냐');
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

  console.log('order', typeof option.order);
  return (
    <SelectWrap>
      {sort === 'checkbox' ? (
        <CheckInput
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

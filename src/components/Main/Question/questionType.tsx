import short from '../../../assets/short.png';
import long from '../../../assets/long.png';
import check from '../../../assets/checkbox.png';
import radio from '../../../assets/radiobox.png';
import drop from '../../../assets/dropbox.png';
import down from '../../../assets/down.png';
import { useAppDispatch } from '../../../state/hook';
import { useState, useRef, useEffect } from 'react';
import { Icon, IconWrap, ListWrap, Selection, Title, Wrap } from '../../../style/question';
import { changeOptionType } from '../../../state/survey';
import { type } from '../../../model/typeDefs';

const QuestionType = ({ questionType, qIdx }: { questionType: type; qIdx: number }) => {
  const dispatch = useAppDispatch();
  const side = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState<boolean>(false);

  const lists = [
    { sort: 'short-text', typeTitle: '단답형', img: short },
    { sort: 'long-text', typeTitle: '장문형', img: long },
    { sort: 'radio', typeTitle: '객관식 질문', img: radio },
    { sort: 'checkbox', typeTitle: '체크박스', img: check },
    { sort: 'drop', typeTitle: '드롭다운', img: drop },
  ];

  //<Selection />이 아닌 부분을 선택 했을시에는 list(단답형 장문형 등등)들이 보이지 않게 하는 함수
  const handleClickOutside = (event: CustomEvent<MouseEvent>) => {
    if (!side?.current?.contains(event.target as Node)) {
      setVisible(false);
    }
  };

  //이벤트를 달아주는 역할을 한다.
  useEffect(() => {
    window.addEventListener('click', handleClickOutside as EventListener);
    return () => {
      window.removeEventListener('click', handleClickOutside as EventListener);
    };
  }, []);

  return (
    <Selection
      ref={side}
      onClick={() => {
        setVisible(!visible);
      }}
    >
      <IconWrap>
        <Icon src={questionType.img} />
        <Title>{questionType.typeTitle}</Title>
      </IconWrap>
      <Icon src={down} />
      <ListWrap visible={visible}>
        {visible
          ? lists.map((list, i) => {
              return (
                <Wrap
                  key={i}
                  onClick={() => {
                    dispatch(changeOptionType({ qIdx, option: list }));
                  }}
                >
                  <Icon src={list.img} />
                  <Title>{list.typeTitle}</Title>
                </Wrap>
              );
            })
          : null}
      </ListWrap>
    </Selection>
  );
};
export default QuestionType;

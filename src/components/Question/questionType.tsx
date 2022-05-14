import short from '../../assets/short.png';
import long from '../../assets/long.png';
import check from '../../assets/checkbox.png';
import radio from '../../assets/radiobox.png';
import drop from '../../assets/dropbox.png';
import down from '../../assets/down.png';
import { useAppDispatch } from '../../state/hook';
import { useState, useRef, useEffect } from 'react';
import { Icon, IconWrap, ListWrap, Selection, Title, Wrap } from '../../style/questionSt';
import { changeOptionType } from '../../state/survey';

const QuestionType = ({ qIdx }: { qIdx: number }) => {
  const dispatch = useAppDispatch();
  const side = useRef<HTMLDivElement>(null);

  const [choice, setChoice] = useState<{ img: string; title: string }>({ img: short, title: '단답형' });
  const [visible, setVisible] = useState<boolean>(false);

  const lists = [
    { img: short, title: '단답형' },
    { img: long, title: '장문형' },
    { img: radio, title: '객관식 질문' },
    { img: check, title: '체크박스' },
    { img: drop, title: '드롭다운' },
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
        <Icon src={choice.img} />
        <Title>{choice.title}</Title>
      </IconWrap>
      <Icon src={down} />
      <ListWrap visible={visible}>
        {visible
          ? lists.map((list, i) => {
              return (
                <Wrap
                  key={i}
                  onClick={() => {
                    setChoice(list);
                    dispatch(changeOptionType({ qIdx, option: list.title }));
                  }}
                >
                  <Icon src={list.img} />
                  <Title>{list.title}</Title>
                </Wrap>
              );
            })
          : null}
      </ListWrap>
    </Selection>
  );
};
export default QuestionType;

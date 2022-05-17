import { useEffect, useRef, useState } from 'react';
import { option } from '../../../model/typeDefs';
import { Icon, IconWrap, ListWrap, Selection, Title, Wrap } from '../../../style/question';
import down from '../../../assets/down.png';
import { useAppDispatch } from '../../../state/hook';
import { updateAnswerData } from '../../../state/survey';
import { useLocation } from 'react-router-dom';

const PvDropDown = ({ options, qIdx, answer }: { options: option[]; qIdx: number; answer: string | string[] }) => {
  const dispatch = useAppDispatch();
  const side = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const [visible, setVisible] = useState<boolean>(false);

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
      result={pathname === '/result' || undefined}
      ref={side}
      onClick={(e) => {
        if (pathname === '/result') {
          e.preventDefault();
        } else {
          setVisible(!visible);
        }
      }}
    >
      <IconWrap>
        <Title>{answer === '' ? '선택' : answer}</Title>
      </IconWrap>
      <Icon src={down} />
      <ListWrap visible={visible}>
        {visible
          ? options.map((option, i) => {
              return (
                <Wrap
                  key={i}
                  onClick={(event) => {
                    if (option.order === 0) {
                      dispatch(updateAnswerData({ qIdx, answer: '' }));
                    } else {
                      dispatch(updateAnswerData({ qIdx, answer: option.content }));
                    }
                  }}
                >
                  <Title>{option.content}</Title>
                </Wrap>
              );
            })
          : null}
      </ListWrap>
    </Selection>
  );
};
export default PvDropDown;

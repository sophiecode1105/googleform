import { useEffect, useRef, useState } from 'react';
import { option } from '../../model/typeDefs';
import { Icon, IconWrap, ListWrap, Selection, Title, Wrap } from '../../style/questionSt';
import down from '../../assets/down.png';

const PvDropDown = ({ options }: { options: option[] }) => {
  const side = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>('');

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
                      setAnswer('');
                    } else {
                      setAnswer(option.content);
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

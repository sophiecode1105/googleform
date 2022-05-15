import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../state/hook';
import { updateHedaerData } from '../../../state/survey';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { Container, Form, Input, InputWrap, TitleInput } from '../../../style/titleSt';

const Title = () => {
  const dispatch = useAppDispatch();
  const contentValue = useSelector((state: RootState) => state.surveyData.header);

  const [title, setTitle] = useState<string>(contentValue.title);
  const [explain, setExplain] = useState<string>(contentValue.explain);

  useEffect(() => {
    dispatch(updateHedaerData({ title, explain }));
  }, [title, explain]);

  return (
    <Container>
      <Form>
        <InputWrap>
          <TitleInput
            type="text"
            placeholder="설문지 제목"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="설문지 설명"
            value={explain}
            onChange={(event) => {
              setExplain(event.target.value);
            }}
          />
        </InputWrap>
      </Form>
    </Container>
  );
};

export default Title;

import { useForm } from 'react-hook-form';
import { FormData } from '../../model/typeDefs';
import { useEffect } from 'react';
import { useAppDispatch } from '../../state/hook';
import { updateHedaerData } from '../../state/survey';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { Container, Form, Input, InputWrap, TitleInput } from '../../style/titleSt';

const Title = () => {
  const dispatch = useAppDispatch();
  const contentValue = useSelector((state: RootState) => state.surveyData.header);

  useEffect(() => {
    setValue('title', contentValue.title);
  }, []);

  //useForm register -> input의 이름으로 등록을 해주는것을 의미한다.
  //watch -> 실시간 바뀌는 값을 알수있다. (event.target.value)의 역할
  //setValue -> 해당 inputdp value를 넣어주는 역할
  const { register, watch, setValue } = useForm<FormData>({ mode: 'onChange' });

  dispatch(updateHedaerData({ title: watch().title, explain: watch().explain }));

  return (
    <Container>
      <Form>
        <InputWrap>
          <TitleInput type="text" placeholder="설문지 제목" {...register('title')} />
          <Input type="text" placeholder="설문지 설명" {...register('explain')} />
        </InputWrap>
      </Form>
    </Container>
  );
};

export default Title;

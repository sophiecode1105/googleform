import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { FormData } from '../../model/typeDefs';
import { useEffect } from 'react';
import { useAppDispatch } from '../../state/hook';
import { updateHedaerData } from '../../state/survey';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

const Container = styled.div`
  margin: 10px auto 0 auto;
  max-width: 900px;
  width: 100%;
  border-radius: 10px;
  border-style: solid;
  border-width: 10px 1px 1px 1px;
  border-color: rgb(18, 9, 99) rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.3);
  background-color: white;
`;

const Form = styled.form``;

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  all: unset;
  margin: 0px 20px 20px 20px;
  overflow-y: scroll;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:focus {
    border-bottom: 2px solid rgb(18, 9, 99);
    transition: 0.7s;
  }
`;

const TitleInput = styled(Input)`
  font-size: 32px;
  margin-top: 20px;
`;

const Title = () => {
  const dispatch = useAppDispatch();
  const contentValue = useSelector((state: RootState) => state.surveyData.header);

  useEffect(() => {
    setValue('title', contentValue.title);
  }, []);

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

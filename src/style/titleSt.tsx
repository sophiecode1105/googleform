import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  border-style: solid;
  border-width: 10px 1px 1px 1px;
  border-color: rgb(18, 9, 99) rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.3);
  background-color: white;
  padding: 10px;
`;

export const Form = styled.form``;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  all: unset;
  margin: 0px 20px 20px 20px;
  overflow-y: scroll;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:focus {
    border-bottom: 2px solid rgb(18, 9, 99);
    transition: 0.7s;
  }
`;

export const TitleInput = styled(Input)`
  font-size: 32px;
  margin-top: 20px;
`;

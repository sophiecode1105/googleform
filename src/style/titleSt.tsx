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
interface necessaryProp {
  necessary: boolean;
}

export const TitleWrap = styled(InputWrap)<necessaryProp>`
  border-bottom: ${(props) => (props.necessary ? '1px solid rgb(209,212,217)' : 'none')};
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

export const TitleContent = styled.div`
  font-size: 32px;
  margin: 20px;
`;

export const SubTitleContent = styled.div`
  font-size: 15px;
  margin: 0px 20px 20px 20px;
`;

export const TitleInput = styled(Input)`
  font-size: 32px;
  margin-top: 20px;
`;

export const Alert = styled.div`
  color: rgb(205, 27, 29);
  font-size: 15px;
  margin: 10px 10px 5px 10px;
`;

import styled from 'styled-components';
import { textAreaProp, visibleProp, resultProp } from '../model/typeDefs';

export const Container = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 10px;
`;

export const PvQuesWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuesWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const QuesTitle = styled.div`
  margin: 20px;
  width: auto;
  font-size: 18px;
  > span {
    color: rgb(205, 27, 29);
  }
`;

export const QuesTitleInput = styled.input`
  all: unset;
  width: 50%;
  margin: 20px;
  background-color: rgb(246, 247, 249);
  font-size: 16px;
  padding: 20px;
  border-bottom: 1px solid rgb(109, 115, 120);
  &:focus {
    border-bottom: 2px solid rgb(18, 9, 99);
    transition: 0.7s;
  }
  &:hover {
    background-color: rgb(237, 240, 241);
  }
`;

export const Selection = styled.div<resultProp>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  width: 30%;
  margin-right: 20px;
  & ::selection {
    -webkit-tap-highlight-color: transparent;
  }
  cursor: ${(props) => (props.result ? null : 'pointer')};
`;

export const ListWrap = styled.div<visibleProp>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%);
  border-radius: 5px;
  position: absolute;
  width: 100%;
  right: 0;
  background-color: #fff;
  padding: 10px;
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  &:hover {
    background-color: rgb(234, 234, 234);
  }
`;

export const Icon = styled.img`
  width: 1.5em;
  -webkit-user-drag: none;
`;

export const Title = styled.div`
  margin: 10px;
`;

export const ExplainContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

export const Explain = styled.div`
  width: 40%;
  color: rgb(98, 103, 107);
  border-bottom: 1px dotted rgba(0, 0, 0, 0.3);
  padding: 20px 20px 10px 0px;
  margin: 0px 0px 20px 20px;
  user-select: none;
  font-size: 15px;
`;

export const OptionListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 10px 20px;
`;

export const OptionIcon = styled.div`
  font-size: 20px;
  margin-right: 10px;
  color: rgb(175, 175, 175);

  &:last-child {
    color: black;
    cursor: pointer;
  }
`;

export const InputProp = styled.input`
  all: unset;
  font-size: 14px;
  padding-bottom: 5px;
  &:hover {
    border-bottom: 1px solid rgb(236, 236, 236);
  }
  &:focus {
    border-bottom: 1.5px solid rgb(18, 9, 99);
    transition: 0.7s;
  }
`;

export const AddOptionInput = styled(InputProp)`
  width: 4rem;
`;

export const OptionInput = styled(InputProp)`
  width: 70%;
`;

export const OptionNum = styled.div`
  margin-right: 10px;
`;

export const AddWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const TextDiv = styled.div`
  padding-bottom: 5px;
  font-size: 14px;
  margin: 0 4px;
  &:last-child {
    color: rgb(84, 135, 235);
    cursor: pointer;
    &:hover {
      background-color: rgb(246, 249, 254);
    }
  }
`;

export const AnswerInput = styled.input<resultProp>`
  all: unset;
  width: 40%;
  font-size: 14px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(217, 217, 217);
  &:focus {
    border-bottom: ${(props) => (props.result ? null : '1.5px solid rgb(18, 9, 99)')};
    transition: ${(props) => (props.result ? null : '0.7s')};
  }
`;

export const AnswerTextArea = styled.textarea<textAreaProp>`
  all: unset;
  width: 100%;
  font-size: 14px;
  padding-bottom: 5px;
  height: ${(props) => String(props.lines * 14) + 'px'};
  max-height: 200px;
  overflow: auto;
  border-bottom: 1px solid rgb(217, 217, 217);
  &:focus {
    border-bottom: ${(props) => (props.result ? null : '1.5px solid rgb(18, 9, 99)')};
    transition: ${(props) => (props.result ? null : '0.7s')};
  }
`;

export const SelectListWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const SelectLabel = styled.label`
  margin-left: 10px;
`;

export const CheckInput = styled.input<resultProp>`
  appearance: none;
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid rgb(77, 80, 84);
  border-radius: 0.15rem;
  margin: 10px 0px;
  cursor: ${(props) => (props.result ? null : 'pointer')};
  &:checked {
    border-color: transparent;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png');
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: rgb(18, 9, 99);
  }
`;

export const RadioInput = styled.input<resultProp>`
  accent-color: rgb(18, 9, 99);
  width: 18px;
  height: 18px;
  margin: 10px 0px;
  cursor: ${(props) => (props.result ? null : 'pointer')};
`;

export const SelectWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ErrorMessage = styled.div`
  font-size: 14px;
  color: rgb(205, 27, 29);
  margin: 20px;
`;

export const Exclamation = styled.i`
  margin-right: 10px;
`;

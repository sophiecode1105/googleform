import styled from 'styled-components';
import { visibleProp } from '../model/typeDefs';

export const Container = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 10px;
`;

export const QuesWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  width: 100%;
`;

export const QuesTitle = styled.input`
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

export const Selection = styled.div`
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
  cursor: pointer;
`;

export const ListWrap = styled.div<visibleProp>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  border: 2px solid black;
  position: absolute;
  width: 100%;
  right: 0;
  background-color: #fff;

  padding: 10px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
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
  margin-left: 20px;
  user-select: none;
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

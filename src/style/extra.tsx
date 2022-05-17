import styled from 'styled-components';

export const ExtraContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid rgb(209, 212, 217);
  padding-top: 5px;
  margin: 0px 20px;
`;

export const ExtraIconWrap = styled.div`
  padding: 10px;
  border-radius: 100%;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgb(247, 247, 247);
  }
`;
export const ExtraIcon = styled.i`
  color: #5f6368;
  font-size: 20px;
`;

export const Text = styled.div`
  margin: 10px;
  font-size: 15px;
`;

export const Line = styled.div`
  border: 1px solid rgb(231, 232, 237);
  height: 25px;
  margin: 10px;
`;

export const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 1rem;
`;

interface isOnProp {
  isOn: boolean;
}

export const ToggleInside = styled.div<isOnProp>`
  width: 40px;
  height: 20px;
  border-radius: 30px;
  background-color: ${(props) => (props.isOn ? 'rgb(18, 9, 99)' : 'grey')};
  transition: ${(props) => (props.isOn ? ' 0.9s ease' : null)};
`;

export const ToggleCircle = styled.div<isOnProp>`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #ffffff;
  transform: ${(props) => (props.isOn ? 'translate(20px)' : 'translate(0px)')};
  transition: 0.5s ease;
`;

import { useState } from 'react';
import { useAppDispatch } from '../../../../state/hook';
import { changeNeccessaryState } from '../../../../state/survey';
import { ToggleCircle, ToggleContainer, ToggleInside } from '../../../../style/extra';

const Toggle = ({ isOn, qIdx }: { isOn: boolean; qIdx: number }) => {
  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    dispatch(changeNeccessaryState({ isOn: !isOn, qIdx }));
  };

  return (
    <ToggleContainer onClick={toggleHandler}>
      <ToggleInside isOn={isOn} />
      <ToggleCircle isOn={isOn} />
    </ToggleContainer>
  );
};
export default Toggle;

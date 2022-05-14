import { useState } from 'react';
import { ToggleCircle, ToggleContainer, ToggleInside } from '../../../style/extraSt';

const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <ToggleContainer onClick={toggleHandler}>
      <ToggleInside isOn={isOn} />
      <ToggleCircle isOn={isOn} />
    </ToggleContainer>
  );
};
export default Toggle;

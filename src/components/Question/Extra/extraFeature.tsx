import styled from 'styled-components';
import { ExtraContainer, ExtraIcon, ExtraIconWrap, Line, Text } from '../../../style/extraSt';
import Toggle from './toggle';

const ExtraFeature = () => {
  const iconName = ['fa-regular fa-copy', 'fa-regular fa-trash-can'];
  return (
    <ExtraContainer>
      {iconName.map((list) => {
        return (
          <ExtraIconWrap>
            <span>
              <ExtraIcon className={list} />
            </span>
          </ExtraIconWrap>
        );
      })}
      <Line> </Line>
      <Text>필수</Text>
      <Toggle />
    </ExtraContainer>
  );
};
export default ExtraFeature;

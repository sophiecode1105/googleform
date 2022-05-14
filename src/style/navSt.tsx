import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5em;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const IllustImgWrap = styled.div`
  display: flex;
`;
export const IllustImg = styled.img`
  height: 5rem;
  object-fit: fill;
  margin-right: 1rem;
`;

export const PreviewImg = styled.img`
  height: 2rem;
  cursor: pointer;
`;

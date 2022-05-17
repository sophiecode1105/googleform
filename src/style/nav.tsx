import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5em;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    height: 4.5rem;
  }
`;

export const IllustImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IllustImg = styled.img`
  height: 5rem;
  object-fit: fill;
  margin-right: 1rem;
  @media (max-width: 768px) {
    height: 4rem;
    margin-right: 0.5rem;
  }
`;

export const PreviewImg = styled.i`
  font-size: 25px;
  margin: 15px;
  color: rgb(85, 90, 93);
  cursor: pointer;
`;

export const AddImg = styled.i`
  display: none;
  @media (max-width: 768px) {
    cursor: pointer;
    display: block;
    font-size: 21px;
    color: rgb(85, 90, 93);
    margin: 15px;
  }
`;

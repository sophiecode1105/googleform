import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  all: unset;
  background-color: rgb(239, 84, 29);
  color: #fff;
  font-size: 15px;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
`;

export const DeleteAnswer = styled.div`
  color: rgb(239, 84, 29);
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background-color: #f6e2ce;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

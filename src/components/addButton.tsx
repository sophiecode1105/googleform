import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
`;

const Button = styled.button`
  all: unset;
  background-color: rgb(239, 84, 29);
  color: #fff;
  font-size: 15px;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
`;

const AddButton = () => {
  return (
    <Container>
      <Button>질문 추가</Button>
    </Container>
  );
};
export default AddButton;

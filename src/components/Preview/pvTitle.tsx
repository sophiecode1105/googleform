import { title } from '../../model/typeDefs';
import { Alert, Container, Form, InputWrap, SubTitleContent, TitleContent, TitleWrap } from '../../style/titleSt';

const PvTitle = ({ header, necessary }: { header: title | undefined; necessary: boolean }) => {
  return (
    <Container>
      <Form>
        <TitleWrap necessary={necessary}>
          <TitleContent>{header?.title}</TitleContent>
          {header?.explain === '' ? null : <SubTitleContent>{header?.explain}</SubTitleContent>}
        </TitleWrap>
        {necessary ? <Alert>* 필수항목</Alert> : null}
      </Form>
    </Container>
  );
};
export default PvTitle;

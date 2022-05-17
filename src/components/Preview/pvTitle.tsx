import { useLocation } from 'react-router-dom';
import { title } from '../../model/typeDefs';
import { Alert, Container, Form, InputWrap, SubTitleContent, TitleContent, TitleWrap } from '../../style/title';

const PvTitle = ({ header, necessary }: { header: title; necessary: boolean }) => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Form>
        {pathname === '/result' ? <span>응답은 수정할 수 없습니다.</span> : null}
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

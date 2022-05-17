import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Nav/NavBar';
import GlobalStyles from './GlobalStyles';
import Main from './page/Main';
import Preview from './page/Preview';
import Result from './page/Result';

const Routers = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;

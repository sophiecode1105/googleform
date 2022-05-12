import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddButton from './components/addButton';
import NavBar from './components/Nav/NavBar';
import GlobalStyles from './GlobalStyles';
import Main from './page/main';

const Routers = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <AddButton />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;

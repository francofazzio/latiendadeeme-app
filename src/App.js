import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import {Button} from'react-bootstrap';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
//import NavBarClass from'./components/NavBarClass'//
import ListProducts from './components/ListProducts/ListProducts';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Container from '@mui/material/Container';
//pages
import HomePage from './pages/Home'
import ContactPage from './pages/Contact'
import NotFoundPage from './pages/NotFound'
import DetailPage from './pages/Detail';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/contacto" element={<ContactPage />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/:category/" element={<HomePage />}/>
        <Route path="/:category/:id" element={<DetailPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

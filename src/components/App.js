import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './Reset.css';

import Navbar from './Navbar/Navbar';
import MainPage from './MainPage/MainPage';
import Sessions from './SelectSession/SelectSession';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<MainPage />}/>
    <Route path='/sessoes/:idFilme' element={<Sessions/>}/>
    </Routes>
    </BrowserRouter>
  );
}



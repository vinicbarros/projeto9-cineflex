import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalStyles";

import Navbar from "./Navbar";
import MainPage from "./MainPage";
import Sessions from "./SelectSession";
import SelectSeats from "./SelectSeats";
import Success from "./Success";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sessoes/:idFilme" element={<Sessions />} />
          <Route path="/assentos/:idSessao" element={<SelectSeats />} />
          <Route path="/sucesso" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

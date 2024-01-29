import React from 'react';
import Navbar from './component/navbar/Navbar';
import Board from './component/box/board/Board';
import LeftNav from './component/box/nav/LeftNav';
import Footer from './component/box/footer/Footer';
import { BrowserRouter, Router , Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import DetailCategorie from './pages/DetailCategorie';
import Plantes from './pages/Plantes'
import Parcelle from './pages/Parcelle'
import Terrain from './pages/Terrain'
import ValiderTerrain from './pages/ValiderTerrain'
import Login from './pages/Login'
import DetailPlante from './pages/DetailPlante'

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

function App() {

  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route index element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/detailcategorie" element={<DetailCategorie/>}/>
          <Route path="/plantes" element={<Plantes/>}/>
          <Route path="/detailplante" element={<DetailPlante/>}/>
          <Route path="/terrain" element={<Terrain/>}/>
          <Route path="/validerterrain" element={<ValiderTerrain/>}/>
          <Route path="/parcelles" element={<Parcelle/>}/>
          <Route path="/logout" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

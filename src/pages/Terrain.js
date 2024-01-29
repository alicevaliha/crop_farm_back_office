import React from 'react';
import Navbar from '../component/navbar/Navbar';
import LeftNav from '../component/box/nav/LeftNav';
import Footer from '../component/box/footer/Footer';
import TerrainBoard from '../component/box/board/TerrainBoard';

function Plantes() {

  return (
    <div>
      <Navbar />
      {/* <Board /> */}
      <TerrainBoard/>
      <LeftNav />
      <Footer/>
    </div>
  );
}


export default Plantes;

import React from 'react';
import Navbar from '../component/navbar/Navbar';
import PlantBoard from '../component/box/board/PlantBoard';
import LeftNav from '../component/box/nav/LeftNav';
import Footer from '../component/box/footer/Footer';

function Plantes() {

  return (
    <div>
      <Navbar />
      {/* <Board /> */}
      <PlantBoard/>
      <LeftNav />
      <Footer/>
    </div>
  );
}


export default Plantes;

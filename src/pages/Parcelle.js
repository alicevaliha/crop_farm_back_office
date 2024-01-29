import React from 'react';
import Navbar from '../component/navbar/Navbar';
import ParcelleBoard from '../component/box/board/ParcelleBoard';
import LeftNav from '../component/box/nav/LeftNav';
import Footer from '../component/box/footer/Footer';

function Plantes() {

  return (
    <div>
      <Navbar />
      {/* <Board /> */}
      <ParcelleBoard/>
      <LeftNav />
      <Footer/>
    </div>
  );
}


export default Plantes;

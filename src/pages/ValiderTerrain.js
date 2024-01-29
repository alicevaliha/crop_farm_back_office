import React from 'react';
import Navbar from '../component/navbar/Navbar';
import LeftNav from '../component/box/nav/LeftNav';
import Footer from '../component/box/footer/Footer';
import ValidBoard from '../component/box/board/ValidBoard';

function Plantes() {

  return (
    <div>
      <Navbar />
      <ValidBoard />
      <LeftNav />
      <Footer/>
    </div>
  );
}


export default Plantes;

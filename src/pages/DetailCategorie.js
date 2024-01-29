import React from 'react';
import Navbar from '../component/navbar/Navbar';
import LeftNav from '../component/box/nav/LeftNav';
import Footer from '../component/box/footer/Footer';
import DetCatBoard from '../component/box/board/DetCatBoard'

function Categories() {
  return (
    <div>
      <Navbar />
      <DetCatBoard/>
      <LeftNav />
      <Footer/>
    </div>
  );
}

export default Categories;

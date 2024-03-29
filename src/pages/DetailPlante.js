import React from 'react';
import Navbar from '../component/navbar/Navbar';
import LeftNav from '../component/box/nav/LeftNav';
import Footer from '../component/box/footer/Footer';
import DetailPlanteBoard from '../component/box/board/DetailPlanteBoard';

function Categories() {
  return (
    <div>
      <Navbar />
      <DetailPlanteBoard/>
      <LeftNav />
      <Footer/>
    </div>
  );
}

export default Categories;

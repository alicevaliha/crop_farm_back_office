import React from 'react';
import Navbar from '../component/navbar/Navbar';
import LeftNav from '../component/box/nav/LeftNav';
import Footer from '../component/box/footer/Footer';
import CategorieBoard from '../component/box/board/CategorieBoard';

function Categories() {
  return (
    <div>
      <Navbar />
      <CategorieBoard/>
      <LeftNav />
      <Footer/>
    </div>
  );
}

export default Categories;

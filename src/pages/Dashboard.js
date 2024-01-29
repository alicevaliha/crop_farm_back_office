import React from 'react';
import Navbar from '../component/navbar/Navbar';
import Board from '../component/box/board/Board';
import LeftNav from '../component/box/nav/LeftNav';
import Footer from '../component/box/footer/Footer';

function Dashboard() {

  return (
    <div>
      <Navbar />
      <Board />
      <LeftNav />
      <Footer/>
    </div>
  );
}


export default Dashboard;

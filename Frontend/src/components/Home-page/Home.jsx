import React from 'react';
import HomeBody from './HomeBody';
import Footer from '.././Footer';
import Navbar from '.././Navbar';
import Card from '../Home-page/Card';

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeBody />
      <Card />
      <Footer />
    </>
  );
};

export default Home;

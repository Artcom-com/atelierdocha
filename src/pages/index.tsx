import React from 'react';
import type { NextPage } from 'next';
import Header from '../components/Layout/Header/Header';
import PageHome from '../components/Home/Home';
import About from '../components/About/About';

const Home: NextPage = () => (
  <>
    <Header />
    <PageHome />
    <About />
  </>
);

export default Home;

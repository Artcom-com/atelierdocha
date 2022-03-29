import React from 'react';
import type { NextPage } from 'next';
import Header from '../components/Layout/Header/Header';
import PageHome from '../components/Home/Home';

const Home: NextPage = () => (
  <>
    <Header />
    <PageHome />
  </>
);

export default Home;

import React from 'react';
import type { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';
import Header from '../components/Layout/Header/Header';
import PageHome from '../components/Home/Home';
import About from '../components/About/About';
import Products from '../components/Products/Products';

const Home: NextPage = () => (
  <>
    <Flex
      flexDir="column"
      px={{ base: '2em', xl: '4em' }}
    >
      <Header />
      <PageHome />
    </Flex>
    <About />
    <Products />
  </>
);

export default Home;

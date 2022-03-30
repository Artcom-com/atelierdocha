import React from 'react';
import type { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';
import Header from '../components/Layout/Header/Header';
import PageHome from '../components/Home/Home';
import About from '../components/About/About';

const Home: NextPage = () => (
  <>
    <Flex
      w="full"
      h="full"
      flexDir="column"
      bgImage="/images/home.png"
      bgRepeat="no-repeat"
      bgSize="100% 100%"
    >
      <Header />
      <PageHome />
    </Flex>
    <About />
  </>
);

export default Home;

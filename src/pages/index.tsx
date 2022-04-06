/* eslint-disable react/prop-types */
import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Flex } from '@chakra-ui/react';
import Header from '../components/Layout/Header/Header';
import PageHome from '../components/Home/Home';
import About from '../components/About/About';
import Products, { ProductsProps } from '../components/Products/Products';
import Footer from '../components/Layout/Footer/Footer';
import SEO from '../components/SEO';
import api from '../services/fetchAPI/init';
import { ProductModel } from '../../backend/data/model/ProductModel';

const Home: NextPage<ProductsProps> = ({ products }) => (
  <>
    <SEO title="Atelier do Chá" description="Home page" />
    <Flex
      flexDir="column"
      px={{ base: '2em', xl: '4em' }}
    >
      <Header />
      <PageHome />
    </Flex>
    <About />
    <Products products={products} />
    <Footer />
  </>
);

export default Home;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await api.get('/products/pin/get');

  return {
    props: {
      products: result.data.content as ProductModel[],
    },
  };
};

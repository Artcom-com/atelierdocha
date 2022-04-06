/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import {
  Box,
  Flex, Grid, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, IconButton,
} from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { parseCookies } from 'nookies';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { ProductModel } from '../../backend/data/model/ProductModel';
import DashButtons from '../components/Layout/Dashboard/DashButtons';
import Header from '../components/Layout/Dashboard/Header';
import SEO from '../components/SEO';
import { AuthContext } from '../context/AuthContext';
import ProductContext from '../context/products/ProductContext';
import api from '../services/fetchAPI/init';

export interface DashboardProps {
  products: ProductModel[]
}

const Dashboard: NextPage<DashboardProps> = ({ products }) => {
  const ctx = useContext(AuthContext);
  const productsCtx = useContext(ProductContext);
  const [renderCurrentProducts, setRenderCurrentProducts] = useState<ProductModel[]>(products);

  useEffect(() => {
    for (const product of products) {
      if (product.pinned) {
        productsCtx.handlePinProduct(product.id as string);
      }
    }

    productsCtx.handleAddProducts(products);
    productsCtx.handleAddProductsInCurrentPage(products);
  }, []);

  useEffect(() => {
    const handleSetCurrentProducts = () => {
      setRenderCurrentProducts(productsCtx.productsInCurrentPage);
    };
    handleSetCurrentProducts();
  }, [productsCtx.hasChanged]);

  const handleCheckIsPinned = (product: ProductModel): boolean => product.pinned || (productsCtx.pinnedList.indexOf(product.id as string) > -1);

  return (
    <>
      <SEO title="Dashboard | Atelier do Chá" description="Dashboard page" />
      <Header />
      <Flex w="100%" h="80vh" mt="6em" alignItems="center" justifyContent="center" flexDir="column">
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="15% 80%"
          w="100%"
          h="100%"
          gap={4}
          px="1em"
          boxSizing="border-box"
        >
          <Flex bg="#FFFFFF">{ctx.user?.userInfo.email}</Flex>
          <Flex bg="papayawhip" w="full" alignItems="center" justifyContent="flex-start" flexDir="column">
            <TableContainer w="100%">
              <Table variant="unset" size="lg" fontSize={{ base: '14px', md: '24px' }}>
                <Thead bg="#789341">
                  <Tr>
                    <Th color="#fff" textAlign="center" border="2px solid #fff">Imagem</Th>
                    <Th color="#fff" textAlign="center" border="2px solid #fff">Nome</Th>
                    <Th color="#fff" textAlign="center" border="2px solid #fff">Preço</Th>
                    <Th color="#fff" textAlign="center" border="2px solid #fff">Fixado</Th>
                    <Th color="#fff" textAlign="center" border="2px solid #fff">Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {productsCtx.productsInCurrentPage.map((product) => (
                    <Tr color="#fff" key={product.name + product.id} border="2px solid #fff" bg="#789341">
                      <Td border="2px solid #fff" bg="#789341" alignItems="center">
                        <Box position="relative" w="100%" h="100px">
                          <Image
                            objectFit="fill"
                            layout="fill"
                            src={`${product.imagePresentationUrl}`}
                            alt="Product Image"
                          />
                        </Box>
                      </Td>
                      <Td textAlign="center" border="2px solid #fff" bg="#789341">{product.name}</Td>
                      <Td textAlign="center" border="2px solid #fff" bg="#789341">{product.price}</Td>
                      <Td textAlign="center" border="2px solid #fff" bg="#789341">{handleCheckIsPinned(product) ? 'Fixado' : 'Não fixado'}</Td>
                      <Td textAlign="center" border="2px solid #fff" bg="#789341">
                        <DashButtons id={product.id as string} pinned={handleCheckIsPinned(product)} />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot bg="#789341">
                  <Tr>
                    <Th color="#fff" textAlign="center" border="2px solid #fff">Imagem</Th>
                    <Th color="#fff" textAlign="center" border="2px solid #fff">Nome</Th>
                    <Th color="#fff" textAlign="center" border="2px solid #fff">Preço</Th>
                    <Th color="#fff" textAlign="center" border="2px solid #fff">Fixado</Th>
                    <Th color="#fff" textAlign="center" border="px solid #fff">Actions</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
            <Flex>
              <IconButton
                bg="#789341"
                color="#fff"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<AiOutlineArrowLeft />}
              />
              <IconButton
                bg="#789341"
                color="#fff"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<AiOutlineArrowRight />}
              />
            </Flex>
          </Flex>
        </Grid>
      </Flex>
    </>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { authToken } = parseCookies(ctx);

  const result = await api.get('/products/pagination/0');

  if (authToken === undefined || authToken === null) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      products: result.data.content as ProductModel[],
    },
  };
};

/* eslint-disable react/prop-types */
import {
  Flex, Grid, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr,
} from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { parseCookies } from 'nookies';
import React, { useContext } from 'react';
import { ProductModel } from '../../backend/data/model/ProductModel';
import Header from '../components/Layout/Dashboard/Header';
import SEO from '../components/SEO';
import { AuthContext } from '../context/AuthContext';
import api from '../services/fetchAPI/init';

export interface DashboardProps {
  products: ProductModel[]
}

const Dashboard: NextPage<DashboardProps> = ({ products }) => {
  const ctx = useContext(AuthContext);
  return (
    <>
      <SEO title="Dashboard | Atelier do Chá" description="Dashboard page" />
      <Header />
      <Flex w="100%" h="80vh" justifyContent="flex-end" flexDir="column" position="absolute">
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="150px 90%"
          w="100%"
          h="90%"
          gap={4}
          pr="1em"
        >
          <Flex bg="tomato">{ctx.user?.userInfo.email}</Flex>
          <Flex bg="papayawhip" w="full" justifyContent="center" alignItems="center">
            <TableContainer w="100%">
              <Table variant="striped" size="lg" fontSize={{ base: '14px', md: '24px' }}>
                <Thead bg="#789341">
                  <Tr>
                    <Th color="#fff" textAlign="center" border="1px solid #fff">Nome</Th>
                    <Th color="#fff" textAlign="center" border="1px solid #fff">Preço</Th>
                    <Th color="#fff" textAlign="center" border="1px solid #fff">Fixado</Th>
                    <Th color="#fff" textAlign="center" border="1px solid #fff">Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {products.map((product) => (
                    <Tr>
                      <Td>{product.name}</Td>
                      <Td>{product.price}</Td>
                      <Td>{product.pinned === true ? 'Fixado' : 'Não fixado'}</Td>
                      <Td isNumeric>Deletar, editar</Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot bg="#789341">
                  <Tr>
                    <Th color="#fff" textAlign="center" border="1px solid #fff">Nome</Th>
                    <Th color="#fff" textAlign="center" border="1px solid #fff">Preço</Th>
                    <Th color="#fff" textAlign="center" border="1px solid #fff">Fixado</Th>
                    <Th color="#fff" textAlign="center" border="1px solid #fff">Actions</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Flex>
        </Grid>
      </Flex>
    </>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { authToken } = parseCookies(ctx);

  const result = await api.get('/products/pagination/1');

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

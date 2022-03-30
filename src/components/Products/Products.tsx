import React from 'react';
import { Flex, chakra, Grid } from '@chakra-ui/react';
import ProductsCard, { ProductsCardProps } from './ProcutcsCard';

const Products = (): JSX.Element => {
  const products: ProductsCardProps[] = [
    {
      imagePath: '/images/product-example.jpg',
      title: 'Filtro especial - 100und (Finum®) ',
      value: '34,90',
    },
    {
      imagePath: '/images/product-example.jpg',
      title: 'Filtro especial - 100und (Finum®) ',
      value: '34,90',
    },
    {
      imagePath: '/images/product-example.jpg',
      title: 'Filtro especial - 100und (Finum®) ',
      value: '34,90',
    },
    {
      imagePath: '/images/product-example.jpg',
      title: 'Filtro especial - 100und (Finum®) ',
      value: '34,90',
    },
  ];

  return (
    <Flex
      bg="#fff"
      flexDir="column"
      my={{ base: '1.5em', xl: '2.5em' }}
      alignItems="center"
      py="4em"
    >
      <chakra.h3
        fontWeight="bold"
        color="#6b5f00"
        px="1em"
        pb="1em"
        fontSize={{ base: '2em', md: '3em', xl: '3.5em' }}
        w="full"
        textAlign="center"
      >
        Nossos
        {' '}
        <span style={{ fontWeight: '800', color: '#5b7300' }}>Produtos</span>
      </chakra.h3>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
        gap={8}
        px={{ base: '2.5em', xl: '6em' }}
      >
        {products.map((product, index) => (
          <ProductsCard
          // eslint-disable-next-line react/no-array-index-key
            key={product.title + index}
            imagePath={product.imagePath}
            title={product.title}
            value={product.value}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default Products;

import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import {
  Flex, chakra, Grid, useMediaQuery,
} from '@chakra-ui/react';
import ProductsCard from './ProcutcsCard';
import ScrollContext from '../../context/scroll/ScrollContext';
import { ProductModel } from '../../../backend/data/model/ProductModel';

export interface ProductsProps {
  products: ProductModel[]
}

const Products = ({ products }: ProductsProps): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [previewOffsetTop, setPreviewOffsetTop] = useState<number>(0);

  const scrollCtx = useContext(ScrollContext);

  const ref = useRef<HTMLDivElement>(null);
  const handleScrollToProducts = () => {
    if (ref.current !== null) {
      if (isSmallScreen) {
        setPreviewOffsetTop(ref.current.offsetTop);
        let offsetTop: number;
        if (ref.current.offsetTop < previewOffsetTop) {
          offsetTop = -(previewOffsetTop - ref.current.offsetTop);
        } else {
          offsetTop = ref.current.offsetTop - previewOffsetTop;
        }
        window.scrollBy(0, offsetTop);
      } else {
        ref.current.scrollIntoView();
      }
    }
  };

  useEffect(() => {
    scrollCtx.handleUpdateScrollToProducts(handleScrollToProducts);
  }, []);

  return (
    <Flex
      bg="#fff"
      flexDir="column"
      my={{ base: '1.5em', xl: '2.5em' }}
      alignItems="center"
      py="4em"
      ref={ref}
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
        px={{ base: '1.8em', xl: '6em' }}
      >
        {products.map((product, index) => (
          <ProductsCard
          // eslint-disable-next-line react/no-array-index-key
            key={product.name + index}
            imagePath={product.imagePresentationUrl}
            title={product.name}
            value={product.price}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default Products;

/* eslint-disable no-console */
import React from 'react';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';
import classes from './Products.module.css';
import BuyButton from './BuyButton';

export interface ProductsCardProps {
  imagePath: string
  title: string
  value: string
}

const ProductsCard = ({ imagePath, title, value }: ProductsCardProps): JSX.Element => (
  <Flex
    flexDir="column"
    alignItems="center"
  >
    <Box
      position="relative"
      w={{ base: '150px', xl: '200px' }}
      h={{ base: '150px', xl: '200px' }}
    >
      <Image
        src={imagePath}
        alt="Conceptual Tea Image"
        layout="fill"
        objectFit="fill"
      />
    </Box>
    <div className={classes['border-bottom']} />
    <Flex
      flexDir="column"
    >
      <Text
        color="#6b5f00"
        fontSize={{ base: '1em', xl: '1.5em' }}
        textAlign="center"
      >
        {title}
      </Text>
      <Flex
        justifyContent="center"
      >

        <Flex
          alignItems="end"
        >
          <Text
            color="#6b5f00"
            fontSize="1.5em"
            verticalAlign="middle"
          >
            R$
          </Text>
        </Flex>
        <Flex
          alignItems="end"
        >
          <Text
            color="#6b5f00"
            fontWeight="900"
            fontSize="2em"
          >
            {value}
          </Text>
        </Flex>
      </Flex>
    </Flex>
    <BuyButton whatsMessage={`Olá, gostaria de saber mais sobre o produto ${title} e de valor R$ ${value}.`} />
  </Flex>
);

export default ProductsCard;

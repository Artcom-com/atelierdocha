import { chakra, Flex } from '@chakra-ui/react';
import React from 'react';

const Footer = (): JSX.Element => (
  <Flex
    w="full"
    bg="#fff"
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
      Somos
      {' '}
      <span style={{ fontWeight: '800', color: '#5b7300' }}>Apaixonados</span>
      {' '}
      por Chá
    </chakra.h3>
  </Flex>
);

export default Footer;

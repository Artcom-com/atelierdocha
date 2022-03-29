import React from 'react';
import {
  Flex, Text,
} from '@chakra-ui/react';
import FontBorder from '../UI/FontBorder/FontBorder';
import HomeButton from './HomeButton/HomeButton';

const Home = (): JSX.Element => (
  <Flex
    width="100%"
    p="2.8em"
    bg="#ecf2b8"
    flexDir="column"
  >
    <Flex flexDir="column">
      <Text
        fontWeight="900"
        fontSize="8em"
        color="#fff"
        lineHeight={1}
      >
        LEVE A
        {' '}
        <br />
        SUA
        {' '}
        <FontBorder content="VIDA" />
        <br />
        MAIS
        {' '}
        <FontBorder content="LEVE" />
      </Text>
      <Text
        fontSize="1.8em"
        color="#fff"
        ml="5px"
      >
        LEVE ATELIER DO CHÁ PARA SUA VIDA

      </Text>
    </Flex>
    <HomeButton action="Acessar" />
    <Flex
      justifyContent="flex-end"
    >
      <Flex
        width="300px"
        alignItems="center"
        justifyContent="center"
        bg="#5b7300"
        padding="2em"
        flexDir="column"
      >
        <Text
          color="#fff"
          fontSize="1.8em"
          textAlign="center"
        >
          ENTRAMOS EM
          <br />
          <span style={{ fontWeight: 900 }}>CONTACO</span>
          {' '}
          COM
          <br />
          <span style={{ fontWeight: 900 }}>VOCÊ</span>
          !
        </Text>
        <HomeButton action="CLIQUE AQUI" />
      </Flex>
    </Flex>
  </Flex>
);

export default Home;

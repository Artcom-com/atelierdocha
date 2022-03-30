import React from 'react';
import { chakra, Flex, Text } from '@chakra-ui/react';
import AboutBanner from './AboutBanner';
import Benefits from './Benefits';

const About = () => (
  <>
    <Flex
      my={{ base: '1.5em', xl: '2.5em' }}
      p={{ base: '1.5em', xl: '4.5em' }}
      bg="#5B7300"
      color="#fff"
      flexDir="column"
    >
      <chakra.h3
        fontSize={{ base: '2em', md: '3em', xl: '3.5em' }}
        fontWeight="bold"
        pb="0.5em"
      >
        Quem Somos
      </chakra.h3>
      <Text
        fontSize={{ base: '1em', md: '1.5em', xl: '2em' }}
      >
        Chá é muito mais do que uma bebida. Chá é um ritual.
        É o momento de se conectar com você mesmo e
        entender que em cada xícara de chá cabem momentos felizes e saudáveis.
        E nós, do Atelier, temos orgulho de levar até você
        afeto em forma de sabor com uma variedade de produtos, acessórios e kits.
        Entre em contato e leve mais bem-estar para o seu dia!
      </Text>
    </Flex>
    <AboutBanner />
    <Benefits />
  </>
);

export default About;

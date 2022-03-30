import React from 'react';
import {
  Flex, chakra, Box, Text,
} from '@chakra-ui/react';
import Image from 'next/image';

const Benefits = (): JSX.Element => (
  <Flex
    flexDir="column"
    my={{ base: '1.5em', xl: '2.5em' }}
  >
    <chakra.h3
      w="100%"
      textAlign="center"
      fontSize={{ base: '2em', md: '3em', xl: '3.5em' }}
      fontWeight="bold"
      color="#6b5f00"
      letterSpacing="15px"
    >
      VANTAGENS

    </chakra.h3>
    <Box
      position="relative"
      w="100%"
      h={{ base: '200px', md: '400px', xl: '600px' }}
    >
      <Image
        src="/images/banners/benefits.jpg"
        alt="Conceptual Tea Image"
        layout="fill"
        objectFit="fill"
      />
    </Box>
    <Flex
      w="100%"
      justifyContent="space-between"
      px="2em"
      fontSize={{ base: '12px', md: '16px', xl: '20px' }}
    >
      <Text
        w="16%"
        textAlign="center"
      >
        Auxílio no controle do
        equilíbrio do organismo
      </Text>
      <Text
        w="16%"
        textAlign="center"
      >
        Alivia a irritabilidade
        e a insônia
      </Text>
      <Text
        w="16%"
        textAlign="center"
      >
        Diurético
      </Text>
      <Text
        w="16%"
        textAlign="center"
      >
        Ativa o despertar
        da mente e concentração
      </Text>
      <Text
        w="16%"
        textAlign="center"
      >
        Auxílio na desintoxicação
        do organismo e eliminar
        gordura
      </Text>
      <Text
        w="16%"
        textAlign="center"
      >
        Isotônico
        natural
      </Text>
    </Flex>
  </Flex>
);

export default Benefits;

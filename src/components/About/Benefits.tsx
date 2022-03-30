import React from 'react';
import {
  Flex, chakra, Box, Text,
} from '@chakra-ui/react';
import Image from 'next/image';

import classes from './Benefits.module.css';

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
      justifyContent={{
        base: 'flex-start', sm: 'flex-start', md: 'space-between', xl: 'space-between',
      }}
      flexDir={{
        base: 'column', sm: 'column', md: 'row', xl: 'row',
      }}
      p="2em"
      fontSize={{
        base: '14px', sm: '14px', md: '16px', xl: '20px',
      }}
      gap={2}
      bg={{ base: '#5b7300', sm: '#5b7300', md: '#fff' }}
      color={{ base: '#fff', sm: '#fff', md: '#6b5f00' }}
    >
      <Text
        w={{
          base: '100%', sm: '100%', md: '16%', xl: '16%',
        }}
        textAlign={{ base: 'left', sm: 'left', md: 'center' }}
      >
        ✔
        Auxílio no controle do
        equilíbrio do organismo
      </Text>
      <Text
        w={{
          base: '100%', sm: '100%', md: '16%', xl: '16%',
        }}
        textAlign={{ base: 'left', sm: 'left', md: 'center' }}
      >
        ✔ Alivia a irritabilidade
        <br className={classes.br} />
        e a insônia
      </Text>
      <Text
        w={{
          base: '100%', sm: '100%', md: '16%', xl: '16%',
        }}
        textAlign={{ base: 'left', sm: 'left', md: 'center' }}
      >
        ✔ Diurético
      </Text>
      <Text
        w={{
          base: '100%', sm: '100%', md: '16%', xl: '16%',
        }}
        textAlign={{ base: 'left', sm: 'left', md: 'center' }}
      >
        ✔ Ativa o despertar
        {' '}
        <br className={classes.br} />
        da mente e concentração
      </Text>
      <Text
        w={{
          base: '100%', sm: '100%', md: '16%', xl: '16%',
        }}
        textAlign={{ base: 'left', sm: 'left', md: 'center' }}
      >
        ✔ Auxílio na desintoxicação
        <br className={classes.br} />
        do organismo e eliminar
        gordura
      </Text>
      <Text
        w={{
          base: '100%', sm: '100%', md: '16%', xl: '16%',
        }}
        textAlign={{ base: 'left', sm: 'left', md: 'center' }}
      >
        ✔ Isotônico
        natural
      </Text>
    </Flex>
  </Flex>
);

export default Benefits;

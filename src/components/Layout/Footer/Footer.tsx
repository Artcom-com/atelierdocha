import React from 'react';
import {
  Box, chakra, Flex, Grid, Image, Text,
} from '@chakra-ui/react';
// import classes from './Footer.module.css';

const Footer = (): JSX.Element => (
  <Flex
    w="full"
    bg="#fff"
    pt="4em"
    flexDir="column"
    alignItems="center"
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

    <Grid
      templateColumns={{ base: '', md: '300px repeat(2, 1fr)' }}
      bg="#5b7300"
      w="full"
      h="full"
      py="4em"
      px="3em"
    >
      <Flex
        h="full"
        justifyContent="center"
      >
        <Image
          src="/logo/footer-logo.svg"
          w="200px"
          h="200px"
          alt="Whatsapp logo"
        />
        {/* <Box height="8px" position="absolute" boxShadow="0 4px 4px -2px #000000" p="1px" /> */}
        <Box
          width="3px"
          height="75%"
          my="auto"
          p="auto"
          bg="#fff"
          display={{ base: 'none', md: 'block' }}
        />
      </Flex>
      <Flex
        flexDir="column"
        gap={8}
        justifyContent="center"
      >
        <Text
          fontSize={{ base: '1.2em', xl: '1.5em' }}
          color="#fff"
          textAlign={{ base: 'center', md: 'left' }}
          mt={{ base: '1.5em', md: '0' }}
        >
          Rua Joaquim Leopodilno Lopes, nº 370
          <br />
          Bairro Consolação - Vitória - ES
          <br />
          Cep: 29045-580
        </Text>

        <Flex
          alignItems="center"
          gap={6}
        >
          <Image
            src="/images/svgs/whatsapp-2.svg"
            w={{ base: '40px', xl: '60px' }}
            h={{ base: '40px', xl: '60px' }}
            alt="Whatsapp logo"
          />

          <Text
            fontSize={{ base: '1.5em', xl: '2.5em' }}
            color="#fff"
            fontWeight="700"
          >

            (27) 98868-9325

          </Text>
        </Flex>
      </Flex>

      <Flex
        flexDir="column"
        gap={4}
      >
        <Flex
          alignItems="center"
          gap={6}
        >
          <Image
            src="/images/svgs/email.svg"
            w={{ base: '40px', xl: '50px' }}
            h={{ base: '40px', xl: '50px' }}
            alt="Email logo"
          />

          <Text
            fontSize={{ base: '1.5em', xl: '2em' }}
            color="#fff"
            fontWeight="700"
          >

            sac@atelierdocha.com

          </Text>
        </Flex>

        <Flex
          alignItems="center"
          gap={6}
        >
          <Image
            src="/images/svgs/whatsapp-2.svg"
            w={{ base: '40px', xl: '50px' }}
            h={{ base: '40px', xl: '50px' }}
            alt="Whatsapp logo"
          />

          <Text
            fontSize={{ base: '1.5em', xl: '2em' }}
            color="#fff"
            fontWeight="700"
          >

            @atelierdocha

          </Text>
        </Flex>

        <Flex
          alignItems="center"
          gap={6}
        >
          <Image
            src="/images/svgs/facebook.svg"
            w={{ base: '40px', xl: '50px' }}
            h={{ base: '40px', xl: '50px' }}
            alt="Facebook logo"
          />

          <Text
            fontSize={{ base: '1.5em', xl: '2em' }}
            color="#fff"
            fontWeight="700"
          >

            atelierdocha

          </Text>
        </Flex>
      </Flex>
    </Grid>
    <Flex
      bg="#6b5f00"
      py="1.2em"
      alignItems="center"
      w="full"
    >
      <Text color="#fff" textAlign="center" w="100%">
        2022 - Atelier do Chá. Todos os direitos reservados. Desenvolvido por Artcom Comnunicações
      </Text>
    </Flex>
  </Flex>
);

export default Footer;

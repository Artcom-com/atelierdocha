import React from 'react';
import {
  Box, Flex, HStack, Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import Logo from '../../UI/Logo';
import Line from './Line';

// TODO: Usar Image do Chakra UI

const Header = () => (
  <Flex bg="#ecf2b8" px="2.5em" pt="2em" flexDir="column">
    <Flex w="100%" justifyContent="flex-end">
      <HStack spacing={2}>
        <a href="/">
          <Image
            src="/images/svgs/whatsapp.svg"
            w="40px"
            h="40px"
            alt="Whatsapp logo"
          />
        </a>
        <a href="/">
          <Image
            src="/images/svgs/instagram.svg"
            w="40px"
            h="40px"
            alt="Instagram logo"
          />
        </a>
      </HStack>
    </Flex>
    <Flex>
      <Box w="150px" h="150px" ml="0.5em">
        <Logo />
      </Box>
      <Flex w="full">
        <HStack ml="2em" fontSize="1.5em" display="flex" alignItems="center" spacing={6}>
          <Link href="/">Página inicial</Link>
          <Line />
          <Link href="/">Quem somos</Link>
          <Line />
          <Link href="/">Produtos</Link>
          <Line />
          <Link href="/">Contato</Link>
        </HStack>
      </Flex>
    </Flex>
  </Flex>
);

export default Header;

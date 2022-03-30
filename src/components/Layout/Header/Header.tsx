import React from 'react';
import {
  Flex, HStack, Image, chakra,
} from '@chakra-ui/react';
import Link from 'next/link';
import Logo from '../../UI/Logo';
import Line from './Line';
import SideMenu from './SideMenu';

const Header = (): JSX.Element => (
  <chakra.header display="flex" px="2.5em" pt="2em" flexDir="column">
    <Flex w="100%" justifyContent="flex-end">
      <HStack spacing={2}>
        <a href="/">
          <Image
            src="/images/svgs/whatsapp.svg"
            w={{ base: '30px', xl: '40px' }}
            h={{ base: '30px', xl: '40px' }}
            alt="Whatsapp logo"
          />
        </a>
        <a href="/">
          <Image
            src="/images/svgs/instagram.svg"
            w={{ base: '30px', xl: '40px' }}
            h={{ base: '30px', xl: '40px' }}
            alt="Instagram logo"
          />
        </a>
      </HStack>
    </Flex>
    <Flex>
      <Flex w={{ base: '100px', xl: '150px' }} h={{ base: '100px', xl: '150px' }} ml="0.5em">
        <Logo />
      </Flex>
      <HStack
        ml="2em"
        fontSize="1.5em"
        alignItems="center"
        spacing={6}
        display={{ base: 'none', xl: 'inline-flex' }}
      >
        <Link href="/">Página inicial</Link>
        <Line />
        <Link href="/">Quem somos</Link>
        <Line />
        <Link href="/">Produtos</Link>
        <Line />
        <Link href="/">Contato</Link>
      </HStack>
      <SideMenu />
    </Flex>
  </chakra.header>
);

export default Header;

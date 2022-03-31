import React, { useContext } from 'react';
import {
  Flex, HStack, Image, chakra, Button,
} from '@chakra-ui/react';
import Logo from '../../UI/Logo';
import Line from './Line';
import SideMenu from './SideMenu';
import ScrollContext from '../../../context/ScrollContext';

const Header = (): JSX.Element => {
  const scrollCtx = useContext(ScrollContext);
  return (
    <chakra.header display="flex" px={{ base: '1em', xl: '2.5em' }} pt={{ base: '0.5em', xl: '1.5em' }} flexDir="column">
      <Flex w="100%" justifyContent="flex-end">
        <HStack spacing={2} position={{ base: 'initial', xl: 'absolute' }}>
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
        <Flex w={{ base: '100px', xl: '130px' }} h={{ base: '100px', xl: '150px' }} ml="0.5em">
          <Logo />
        </Flex>
        <HStack
          ml="2em"
          fontSize="1.2em"
          alignItems="center"
          spacing={6}
          color="#000"
          display={{ base: 'none', xl: 'inline-flex' }}
        >
          <Button
            fontSize="1.2em"
            color="#000"
            variant="link"
            onClick={scrollCtx.handleScrollToHome}
          >
            Página inicial

          </Button>
          <Line />
          <Button
            fontSize="1.2em"
            color="#000"
            variant="link"
            onClick={scrollCtx.handleScrollToAbout}
          >
            Quem somos

          </Button>
          <Line />
          <Button
            fontSize="1.2em"
            color="#000"
            variant="link"
            onClick={scrollCtx.handleScrollToProducts}
          >
            Produtos

          </Button>
          <Line />
          <Button
            fontSize="1.2em"
            color="#000"
            variant="link"
            onClick={scrollCtx.handleScrollToContact}
          >
            Contato

          </Button>
        </HStack>
        <SideMenu />
      </Flex>
    </chakra.header>
  );
};

export default Header;

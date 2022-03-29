import React from 'react';
import Link from 'next/link';
import {
  Flex, Box, Image, ChakraProps, OmitCommonProps,
} from '@chakra-ui/react';
import NavItem from './NavItem';

// eslint-disable-next-line react/require-default-props
const SideContent = (props: JSX.IntrinsicAttributes & OmitCommonProps<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ChakraProps> & ChakraProps & { as?: 'div' | undefined; }): JSX.Element => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    h="full"
    pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg="yellow.700"
    borderColor="blackAlpha.300"
    borderRightWidth="1px"
    w="60"
    {...props}
    sx={{
      '&::-webkit-scrollbar': {
        width: '16px',
        borderRadius: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      },
    }}
  >

    <Flex px="4" py="5" align="center">
      <Image
        w="60%"
        h="60%"
        fit="fill"
        src="/images/logo/logo_artcom3.png"
        alt="ArtCom Logo"
        loading="lazy"
      />

    </Flex>
    <Flex
      direction="column"
      as="nav"
      fontSize={['sm', 'md', 'lg', 'xl']}
      color="yellow.700"
      aria-label="Main Navigation"
    >
      <Link href="/" passHref>
        <NavItem>Home</NavItem>
      </Link>
      <Link href="/about" passHref>
        <NavItem>Sobre</NavItem>
      </Link>
      <Link href="/works" passHref>
        <NavItem>Trabalhos</NavItem>
      </Link>
      <Link href="/contact" passHref>
        <NavItem>Contato</NavItem>
      </Link>
    </Flex>
  </Box>
);

export default SideContent;

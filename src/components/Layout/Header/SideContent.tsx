import React, { useContext } from 'react';
import {
  Flex, Box, HStack, Image, Button,
} from '@chakra-ui/react';
import NavItem from './NavItem';
import Logo from '../../UI/Logo';
import ScrollContext, { RefFunction } from '../../../context/ScrollContext';

export interface SideContentProps {
  onClose: () => void
}

// eslint-disable-next-line react/require-default-props
const SideContent = ({ onClose }: SideContentProps): JSX.Element => {
  const scrollCtx = useContext(ScrollContext);
  const handleScroll = (handleScrollToContent: RefFunction) => {
    onClose();
    setTimeout(() => handleScrollToContent(), 300);
    clearTimeout();
  };

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      h="full"
      pb="10"
      py="1.2em"
      overflowX="hidden"
      overflowY="auto"
      bg="#d4db95"
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="100%"
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

      <Flex w="full" alignItems="center" justifyContent="center">
        <Flex w={{ base: '100px', xl: '150px' }} h={{ base: '100px', xl: '150px' }} ml="0.5em">
          <Logo />
        </Flex>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="xl"
        color="#fff"
        aria-label="Main Navigation"
        mt="15px"
      >
        <Button
          fontSize="1em"
          variant="link"
          onClick={() => handleScroll(scrollCtx.handleScrollToHome)}
        >
          <NavItem>Página Inicial</NavItem>
        </Button>
        <Button
          fontSize="1em"
          variant="link"
          onClick={() => handleScroll(scrollCtx.handleScrollToAbout)}
        >
          <NavItem>Quem somos</NavItem>
        </Button>
        <Button
          fontSize="1em"
          variant="link"
          onClick={() => handleScroll(scrollCtx.handleScrollToProducts)}
        >
          <NavItem>Produtos</NavItem>
        </Button>
        <Button
          fontSize="1em"
          variant="link"
          onClick={() => handleScroll(scrollCtx.handleScrollToContact)}
        >
          <NavItem>Contato</NavItem>
        </Button>
      </Flex>
      <Flex w="100%" justifyContent="center" mt="15px">
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
    </Box>
  );
};

export default SideContent;

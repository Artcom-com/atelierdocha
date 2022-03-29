import React from 'react';
import { ChakraProps, Flex, OmitCommonProps } from '@chakra-ui/react';

// eslint-disable-next-line react/require-default-props
const NavItem = (props: JSX.IntrinsicAttributes & OmitCommonProps<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ChakraProps> & ChakraProps & { as?: 'div' | undefined; }) => {
  const { children, ...rest } = props;
  return (
    <Flex
      align="center"
      px="4"
      mx="2"
      rounded="md"
      py="3"
      cursor="pointer"
      color="#5B7300"
      _hover={{
        bg: 'blackAlpha.300',
        color: 'whiteAlpha.900',
      }}
      role="group"
      transition=".15s ease"
      justifyContent="center"
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default NavItem;

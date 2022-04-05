import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import {
  Button, ButtonGroup, chakra, Flex,
} from '@chakra-ui/react';

import { AuthContext } from '../../../context/AuthContext';
import Logo from '../../UI/Logo';

const Header = (): JSX.Element => {
  const { push } = useRouter();
  const { user, signOut } = useContext(AuthContext);

  const logout = (): void => {
    signOut();
    push('/', '/');
  };

  return (
    <chakra.header
      bg="#fff"
      position="sticky"
      w="full"
      px={{ base: 2, sm: 4 }}
    >

      <Flex
        justifyContent="space-between"
      >
        <Flex w={{ base: '100px', xl: '130px' }} h={{ base: '100px', xl: '150px' }} ml="0.5em">
          <Logo />
        </Flex>
        <ButtonGroup display="flex" alignItems="center">
          {user?.userInfo !== undefined && (
            <Button onClick={() => logout()} colorScheme="teal" size="lg" variant="outline" fontWeight="bold">
              Sair
            </Button>
          )}
        </ButtonGroup>
      </Flex>
    </chakra.header>
  );
};

export default Header;

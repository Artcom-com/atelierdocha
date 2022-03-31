import React from 'react';
import Link from 'next/link';
import { Button, Flex } from '@chakra-ui/react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Logo from '../../UI/Logo';

const FormHeader = (): JSX.Element => (
  <Flex
    justifyContent="space-between"
    w="full"
    px="1em"
    py="3em"
  >
    <Link href="/" passHref>
      <Button variant="link" color="#6b5f00" fontSize="26px">
        {' '}
        <FaLongArrowAltLeft />
        Voltar
      </Button>
    </Link>
    <Flex w={{ base: '100px', xl: '130px' }} h={{ base: '100px', xl: '150px' }} ml="0.5em">
      <Logo />
    </Flex>
  </Flex>
);

export default FormHeader;

import { Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react';

export interface HomeButtonProps {
  action: string
}

const HomeButton = ({ action }: HomeButtonProps) => (
  <ButtonGroup variant="outline" mt="15px">
    <Button
      as="a"
      rel="noopener noreferrer"
      target="_blank"
      href="https://api.whatsapp.com/send?phone=5527988689325&text=Ol%C3%A1%2C%20gostaria%20saber%20mais%20dos%20seus%20produtos."
      borderColor="#fff"
      borderWidth="2px"
      color="#fff"
      borderRadius="20px"
      size="lg"
      fontSize={{ base: '1em', xl: '1.2em' }}
      px="1.5em"
      transition="0.5s"
      _hover={{
        bg: '#404f08',
      }}
    >
      {action}
    </Button>
  </ButtonGroup>
);

export default HomeButton;

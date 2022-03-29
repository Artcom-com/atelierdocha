import { Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react';

export interface HomeButtonProps {
  action: string
}

const HomeButton = ({ action }: HomeButtonProps) => (
  <ButtonGroup variant="outline" mt="15px">
    <Button
      borderColor="#fff"
      borderWidth="2px"
      color="#fff"
      borderRadius="20px"
      size="lg"
      fontSize="1.2em"
      px="1.5em"
    >
      {action}
    </Button>
  </ButtonGroup>
);

export default HomeButton;

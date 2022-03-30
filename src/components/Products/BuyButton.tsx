import React from 'react';
import {
  Button, ButtonGroup, Flex, Image,
} from '@chakra-ui/react';

export interface BuyButtonProps {
  whatsMessage: string
}

const BuyButton = ({ whatsMessage }: BuyButtonProps) => (
  <ButtonGroup variant="outline" mt="15px">
    <a
      href={`https://api.whatsapp.com/send?phone=5527988888888&tex=${whatsMessage}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Button
        bg="#738127"
        color="#fff"
        borderRadius="20px"
        size="lg"
        fontSize={{ base: '0.7em', xl: '1.2em' }}
        pr="0 !important"
        pl="0.8em"
        transition="0.5s"
        _hover={{
          bg: '#404f08',
        }}
      >
        COMPRAR AGORA
        <Flex
          w="100%"
          h="100%"
          alignItems="center"
          justifyContent="center"
          borderRadius="20px"
          bg="#736b27"
          ml="0.5em"
          px="0.2em"
        >
          <Image
            src="/images/svgs/cart.svg"
            w="60%"
            h="60%"
            alt="Whatsapp logo"
            margin="0 !important"
          />
        </Flex>
      </Button>
    </a>
  </ButtonGroup>
);

export default BuyButton;

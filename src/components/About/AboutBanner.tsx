import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import FontBorder from '../UI/FontBorder/FontBorder';

const AboutBanner = (): JSX.Element => (
  <Flex
    bgImage="/images/banners/banner-two.jpg"
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize="100% 100%"
    w="100%"
    h={{ base: '200px', md: '600px', xl: '800px' }}
    alignItems="center"
    px="1.5em"
    mt={{ base: '1.5em', xl: '5em' }}
  >
    <Flex
      h="50%"
    >
      <Text
        fontWeight="900"
        fontSize={{ base: '2em', md: '4em', xl: '6em' }}
        color="#fff"
        lineHeight={1}
        h="100%"
      >
        COMPARTILHE
        {' '}
        <br />
        <FontBorder content="ENERGIA" />
        {' '}
        COM
        <br />
        {' '}
        ATELIER DO CHÁ
      </Text>
    </Flex>
  </Flex>
);

export default AboutBanner;

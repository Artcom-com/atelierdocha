import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import {
  chakra, Flex, Text, useMediaQuery,
} from '@chakra-ui/react';
import AboutBanner from './AboutBanner';
import Benefits from './Benefits';
import ScrollContext from '../../context/scroll/ScrollContext';

const About = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [previewOffsetTop, setPreviewOffsetTop] = useState<number>(0);

  const scrollCtx = useContext(ScrollContext);

  const ref = useRef<HTMLDivElement>(null);
  const handleScrollToAbout = () => {
    if (ref.current !== null) {
      if (isSmallScreen) {
        setPreviewOffsetTop(ref.current.offsetTop);
        let offsetTop: number;
        if (ref.current.offsetTop < previewOffsetTop) {
          offsetTop = -(previewOffsetTop - ref.current.offsetTop);
        } else {
          offsetTop = ref.current.offsetTop - previewOffsetTop;
        }
        window.scrollBy(0, offsetTop);
      } else {
        ref.current.scrollIntoView();
      }
    }
  };

  useEffect(() => {
    scrollCtx.handleUpdateScrollToAbout(handleScrollToAbout);
  }, []);

  return (
    <>
      <Flex
        my={{ base: '1.5em', xl: '2.5em' }}
        p={{ base: '1.5em', md: '3em', xl: '8em' }}
        bg="#5B7300"
        color="#fff"
        flexDir="column"
        ref={ref}
      >
        <chakra.h3
          fontSize={{ base: '2em', md: '3em', xl: '3.5em' }}
          fontWeight="bold"
          pb="0.5em"
        >
          Quem Somos
        </chakra.h3>
        <Text
          fontSize={{ base: '1em', md: '1.5em', xl: '2em' }}
        >
          Chá é muito mais do que uma bebida. Chá é um ritual.
          É o momento de se conectar com você mesmo e
          entender que em cada xícara de chá cabem momentos felizes e saudáveis.
          E nós, do Atelier, temos orgulho de levar até você
          afeto em forma de sabor com uma variedade de produtos, acessórios e kits.
          Entre em contato e leve mais bem-estar para o seu dia!
        </Text>
      </Flex>
      <AboutBanner />
      <Benefits />
    </>
  );
};

export default About;

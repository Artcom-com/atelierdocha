import React, {
  useContext,
  useEffect, useRef, useState,
} from 'react';
import {
  Flex, Text, chakra, useMediaQuery,
} from '@chakra-ui/react';
import FontBorder from '../UI/FontBorder/FontBorder';
import HomeButton from './HomeButton/HomeButton';
import ScrollContext from '../../context/scroll/ScrollContext';

const Home = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [previewOffsetTop, setPreviewOffsetTop] = useState<number>(0);

  const scrollCtx = useContext(ScrollContext);

  const ref = useRef<HTMLDivElement>(null);
  const handleScrollToHome = () => {
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
    scrollCtx.handleUpdateScrollToHome(handleScrollToHome);
  }, []);

  return (
    <Flex
      width="100%"
      p={{ base: '1.8em', xl: '2.8em' }}
      flexDir="column"
      ref={ref}
    >
      <Flex flexDir="column">
        <chakra.h2
          fontWeight="900"
          fontSize={{ base: '2.5em', md: '4em', xl: '8em' }}
          color="#fff"
          lineHeight={1}
        >
          LEVE A
          {' '}
          <br />
          SUA
          {' '}
          <FontBorder content="VIDA" />
          <br />
          MAIS
          {' '}
          <FontBorder content="LEVE" />
        </chakra.h2>
        <Text
          fontSize={{ base: '1em', md: '1.3em', xl: '1.8em' }}
          color="#fff"
          ml="5px"
        >
          LEVE ATELIER DO CHÁ PARA SUA VIDA

        </Text>
      </Flex>
      <HomeButton action="Acessar" />
      <Flex
        justifyContent={{ base: 'center', md: 'flex-end' }}
        mt="15px"
      >
        <Flex
          width="300px"
          alignItems="center"
          justifyContent="center"
          bg="#5b7300"
          padding="2em"
          flexDir="column"
        >
          <Text
            color="#fff"
            fontSize={{ base: '1em', md: '1.5em', xl: '1.8em' }}
            textAlign="center"
          >
            ENTRAMOS EM
            <br />
            <span style={{ fontWeight: 900 }}>CONTACO</span>
            {' '}
            COM
            <br />
            <span style={{ fontWeight: 900 }}>VOCÊ</span>
            !
          </Text>
          <HomeButton action="CLIQUE AQUI" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;

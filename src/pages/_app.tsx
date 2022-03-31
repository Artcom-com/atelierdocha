import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import '../styles/globals.css';
import '../styles/reset.css';
// eslint-disable-next-line import/no-unresolved
import { theme } from '../styles/theme';
import ScrollProvider from '../context/ScrollProvider';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <ScrollProvider>
        <Component {...pageProps} />
      </ScrollProvider>
    </ChakraProvider>
  );
}

export default MyApp;

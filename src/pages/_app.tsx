import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import '../styles/globals.css';
import '../styles/reset.css';
// eslint-disable-next-line import/no-unresolved
import { theme } from '../styles/theme';
import ScrollProvider from '../context/ScrollProvider';
import AuthProvider from '../context/AuthContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <ScrollProvider>
          <Component {...pageProps} />
        </ScrollProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;

import type { AppProps } from 'next/app';
import Head from 'next/head';

import MyLogo from '/public/favicon.png';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from '../styles/themes/LightTheme';
import { GlobalStyle } from '../styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Brian Suruki Portfolio</title>
        <meta name="description" content="Brian Suruki's Portfolio" />
        <link rel="icon" href={MyLogo.src} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

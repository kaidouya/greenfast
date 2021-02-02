import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import type { AppProps } from 'next/app';
import 'fontsource-roboto';

const GlobalStyles = createGlobalStyle``;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

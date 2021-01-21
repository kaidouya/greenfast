import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import type { AppProps } from 'next/app';

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

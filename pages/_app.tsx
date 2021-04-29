import { AppProps } from 'next/app';
import Head from 'next/head';
import { themes } from '@strikelabs/luna';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from '../theme/global';
import Page from '../components/Page';
import FavouriteProvider from '../providers/FavouriteProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <FavouriteProvider>
      <ThemeProvider theme={themes.base}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Head>
            <title>dex</title>
            <link rel="icon" href="/favicon.png" />
          </Head>
          <Page>
            <Component {...pageProps} />
          </Page>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </FavouriteProvider>
  );
}

export default App;

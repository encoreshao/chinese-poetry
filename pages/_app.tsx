import '../styles/globals.css'
import '../styles/swiper.scss'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from './components/Header';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      light: '#065279',
      main: '#065279',
      dark: '#065279',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      dark: '#0044ff',
      contrastText: '#ffcc00'
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>中文诗歌 - Encore Shao</title>
        <meta property="og:title" content="中文诗歌 - Encore Shao" key="title" />
      </Head>

      <Header />
      <Component key={router.asPath} {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp

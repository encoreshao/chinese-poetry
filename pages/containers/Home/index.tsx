/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Box, Button, Stack, Typography } from '@mui/material';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import DataSwiper from './data_swiper';
import Lists from './lists';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#254f1a',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
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


export default function Home() {
  const [data, setData] = useState([]);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://unpkg.com/chinese-poetry@1.4.1/chinese-poetry/lunyu/lunyu.json',
      );

      setData(result.data);
      setMenus(result.data.map((item: any) => item['chapter']))
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              中文诗歌
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              最全中华古诗词数据库, 唐宋两朝近一万四千古诗人, 接近5.5万首唐诗加26万宋诗. 两宋时期1564位词人，21050首词。
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                href="https://github.com/encoreshao/chinese-pooetry"
              >
                View Source Code
              </Button>
              <Button variant="outlined" href="https://encoreshao.github.io/chinese-poetry/">Web Site</Button>
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 8, bgcolor: 'background.paper' }} maxWidth={'lg'}>
          <Lists data={data} menus={menus} />
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
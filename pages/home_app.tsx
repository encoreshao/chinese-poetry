/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/StarBorder';
import MenuIcon from '@mui/icons-material/MenuBookOutlined';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardContent, CardActions, List, ListItem, ListItemText, CardActionArea } from '@mui/material';

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


export default function HomeApp() {
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
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <StarIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            中文诗歌
          </Typography>
        </Toolbar>
      </AppBar>
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
          {/* End hero unit */}

          <Card
            id="top"
            sx={{ p: 2, mb: 2 }}
          >
            {menus.map((menu: any) => (
              <Link
                key={"link-" + menu}
                href={"#" + menu}
                underline="always"
                color="primary"
                variant="inherit"
                sx={{ ml: 1, bgcolor: 'background.paper' }}
              >
                {menu}
              </Link>
            ))}
          </Card>

          <Grid>
            {data.map((result: any) => (
              <Grid item key={result['chapter']} xs={6} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', mb: 2 }}
                >
                  <CardContent>
                    <Button variant="outlined" id={result['chapter']} sx={{ mr: 2 }}>
                      {result['chapter']}
                    </Button>
                    <Link href="#top"><MenuIcon /></Link>

                  </CardContent>
                  <CardActions>
                    <List dense={true} disablePadding={true}>
                      {result['paragraphs'].map((text: any) => (
                        <ListItem key={text}>
                          <ListItemText primary={text} />
                        </ListItem>
                      ))}
                    </List>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" color='primary'>
          中文诗歌
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          数据来源于互联网!
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://icmoc.com/">
            icmoc.com
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
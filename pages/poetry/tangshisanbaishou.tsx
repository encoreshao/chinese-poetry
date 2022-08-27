/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

export default function Tangshisanbaisou(props: { data: any, menus: any }) {
  const { data, menus } = props

  return (
    <>
      <Card
        id="top"
        sx={{ p: 2, mb: 2 }}
      >
        {menus && menus.map((menu: any, index: number) => (
          <Link
            key={`link-${menu}-${index}`}
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
        {data && data.map((result: any, index: number) => (
          (<Grid
            item
            key={`${result['title']}-${index}`}
            xs={6}
            sm={6}
            md={4}
          >
            {result['content'] && result['content'].map((item: any, zindex: number) => (
              <Card
                variant="outlined"
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', mb: 2 }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item['type']}
                  </Typography>

                  <Typography gutterBottom variant="h5" component="div">
                    {item['content'] && item['content'].map((text: any, zidx: number) => (
                      <>
                        <Typography gutterBottom variant="h5" component="div">
                          {text['chapter']} - {text['author']}
                        </Typography>

                        {text['paragraphs'] && text['paragraphs'].map((paragraph: any, zzidx: number) => (
                          <Typography gutterBottom component="div">
                            {paragraph}
                          </Typography>
                        ))}
                      </>
                    ))}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>)
        ))}
      </Grid>
    </>
  );
}
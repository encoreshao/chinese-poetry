/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */

import MenuIcon from '@mui/icons-material/MenuBookOutlined';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { CardActionArea, Typography } from '@mui/material';

export default function Qianjiashi(props: { data: any, menus: any }) {
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
            key={`${result['title']}-${result['author']}-${index}`}
            xs={6}
            sm={6}
            md={4}
          >
            <Card
              variant="outlined"
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', mb: 2 }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {result['title']} - {result['author']}
                    <Link href="#top" style={{ marginLeft: '10px' }}><MenuIcon /></Link>
                  </Typography>
                </CardContent>
              </CardActionArea>

              {result['content'] && result['content'].map((item: any, zindex: number) => (
                <CardContent>
                  <Typography gutterBottom variant="h2" component="div">
                    <ListItemText primary={`${item['type']}`} />
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item['content'] && item['content'].map((text: any, zidx: number) => (
                      <List dense={true} disablePadding={true} key={`${text['chapter']}-${zidx}`}>
                        <Typography gutterBottom component="div">
                          {text['chapter']} - {text['author']}
                        </Typography>

                        {/* {text['paragraphs'] && text['paragraphs'].map((parag: any, zzidx: number) => (
                          <List dense={true} disablePadding={true}>
                            <Typography gutterBottom component="span">
                              {parag}
                            </Typography>
                          </List>
                        ))} */}
                      </List>
                    ))}
                  </Typography>
                </CardContent>
              ))}
            </Card>
          </Grid>)
        ))}
      </Grid>
    </>
  );
}
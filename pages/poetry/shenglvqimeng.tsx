/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */

import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/MenuBookOutlined';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { CardActionArea, CardHeader, Typography } from '@mui/material';

export default function Shenglvqimeng(props: { data: any, menus: any }) {
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
                  <Typography variant="body2" color="text.secondary">
                    {result['abstract']}
                  </Typography>
                </CardContent>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {result['title']} - {result['author']}
                    <Link href="#top" style={{ marginLeft: '10px' }}><MenuIcon /></Link>
                  </Typography>
                </CardContent>
              </CardActionArea>

              {result['content'] && result['content'].map((item: any, zindex: number) => (
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item['chapter']}
                  </Typography>

                  <Typography gutterBottom variant="h5" component="div">
                    {item['content'] && item['content'].map((text: any, zidx: number) => (
                      <>
                        <Typography gutterBottom variant="h5" component="div">
                          {text['chapter']}
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
              ))}
            </Card>
          </Grid>)
        ))}
      </Grid>
    </>
  );
}
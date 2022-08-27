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

export default function Caocao(props: { data: any, menus: any }) {
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
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', mb: 2 }}
            >
              <CardContent>
                <Button variant="outlined" id={result['title']} sx={{ mr: 2 }}>
                  {result['title']}
                </Button>
                <Link href="#top"><MenuIcon /></Link>

              </CardContent>
              <CardActions>
                <List dense={true} disablePadding={true}>
                  {result['paragraphs'] && result['paragraphs'].map((text: any, zindex: number) => (
                    <ListItem key={`${result['title']}-${text}-${zindex}`}>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </CardActions>
            </Card>
          </Grid>)
        ))}
      </Grid>
    </>
  );
}
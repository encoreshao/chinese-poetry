/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */

import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/MenuBookOutlined';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import { CardContent, CardActions, List, ListItem, ListItemText } from '@mui/material';


export default function Lists(props: { data: any, menus: any }) {
  const { data, menus } = props

  return (
    <>
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
    </>
  );
}
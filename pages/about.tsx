import React from 'react';

import Container from '@mui/material/Container';
import { List, ListItem, Typography, ListItemText } from '@mui/material';

export default function About() {
  return (
    <>
      <Container id="loading-container">
        <Typography component="div" className="loading" />
      </Container>

      <Container
        maxWidth={ 'xl' }
        id="about-container"
      >
        <Typography
          sx={{ }}
          component="div"
          align="left"
          color="text.secondary"
          paragraph
        >
          <List dense={true} disablePadding={true} sx={{ }}>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant='h3' component='h3'>
                    Encore Shao
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ pb: 3 }}>
              <ListItemText
                primary={
                  <Typography variant='subtitle1' component='i'>
                    Principal Software Engineer At Ekohe
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant='inherit' component='p'>
                    🤔   Exploring new technologies and developing software solutions and quick hacks.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant='inherit' component='p'>
                    🎓   Lead Software Engineer and Coding stuffs.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant='inherit' component='p'>
                    🌱   Learning about Cloud Tech, Systems Design.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant='inherit' component='p'>
                    ✍️   Pursuing Web Development and Open Source as hobbies.
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Typography>
      </Container>
    </>
  );
}
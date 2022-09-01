import React from 'react';

import Container from '@mui/material/Container';
import { List, ListItem, Typography, ListItemText } from '@mui/material';

export default function About() {
  return (
    <Container
      sx={{ mt: 8, mb: 4 }}
      maxWidth={ 'xl' }
      id="about-container"
    >
      <Typography component="div" className="loading" />

      <Typography
        sx={{ pt: 8 }}
        component="div"
        align="left"
        color="text.secondary"
        paragraph
      >
        <List dense={true} disablePadding={true} sx={{ pt: 10, mt: 8 }}>
          <ListItem>
            <ListItemText
              primary={
                <Typography variant='h3' component='h3'>
                  Encore Shao
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography variant='h4' component='h3'>
                  Staff Software Engineer At Ekohe
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography variant='h5' component='h5'>
                  🤔   Exploring new technologies and developing software solutions and quick hacks.
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography variant='h5' component='h5'>
                  🎓   Lead Software Engineer at Ekohe and coding stuffs.
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography variant='h5' component='h5'>
                  🌱   Learning about Cloud Tech, Systems Design.
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography variant='h5' component='h5'>
                  ✍️   Pursuing Web Development and Open Source as hobbies.
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Typography>
    </Container>
  );
}
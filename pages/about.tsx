import React from 'react';

import Container from '@mui/material/Container';
import { List, ListItem, Typography, ListItemText } from '@mui/material';

const customTypography = (name: string, text: string) => {
  return <Typography variant={name} component={name}>
    {text}
  </Typography>
}

export default function Abount() {
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
              primary={customTypography('h3', 'Encore Shao')}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={customTypography('i', 'Staff Software Engineer At Ekohe')}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={customTypography('h5', '🤔   Exploring new technologies and developing software solutions and quick hacks.')}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={customTypography('h5', '🎓   Lead Software Engineer at Ekohe and coding stuffs.')}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={customTypography('h5', '🌱   Learning about Cloud Tech, Systems Design.')}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={customTypography('h5', '✍️   Pursuing Web Development and Open Source as hobbies.')}
            />
          </ListItem>
        </List>
      </Typography>
    </Container>
  );
}
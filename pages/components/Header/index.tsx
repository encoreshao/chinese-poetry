import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import StarIcon from '@mui/icons-material/StarBorder';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <StarIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            中文诗歌
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
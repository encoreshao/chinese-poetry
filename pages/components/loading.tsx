import { Container, Typography, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <Container sx={{ mt: 8 }} maxWidth={'xl'}>
      <Box sx={{ pt: 4 }}>
        <Typography
          sx={{ pt: 8 }}
          variant="body2"
          align="center"
          color="text.secondary"
        >
          <CircularProgress disableShrink />
        </Typography>
      </Box>
    </Container>
  )
}

export default Loading

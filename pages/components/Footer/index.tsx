/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link'

import { Box, Typography, Button, Stack } from '@mui/material';

import { Categories } from '../../../utils/Constants';
import Copyright from './../../src/Copyright';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography
        sx={{ color: 'text.primary' }}
        variant="h6"
        align="center"
        color='primary'
      >
        中文诗歌
      </Typography>

      <hr />
      <Stack
        sx={{ pl: 1 }}
        direction="row"
        justifyContent="center"
      >
        { Categories.map((category: string) => (
          <Button
            sx={{ color: 'text.primary' }}
            key={category}
          >
            <Link href={{
              pathname: '/poetry/[categoryName]',
              query: { categoryName: category }
            }}>
              {category}
            </Link>
          </Button>
        ))}
      </Stack>

      <hr />
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        此页面由 MUI + Next.js + TypeScript 构建
      </Typography>

      <Copyright />
    </Box>
  );
}
/* eslint-disable jsx-a11y/alt-text */
import { AppBar, Toolbar, Typography, Stack } from '@mui/material';

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Image
            src="https://avatars5.githubusercontent.com/u/30764933?s=50&v=4"
            width={25}
            height={25}
          />

          <Typography sx={{ ml: 2 }} variant="h6" color="inherit" noWrap>
            <Link href='/'>中文诗歌</Link>
          </Typography>

          <hr />
          <Stack
            sx={{ mr: 2 }}
            direction="row"
            justifyContent="center"
          >
            <Typography sx={{ pl: 2 }} variant="h6" color="inherit" noWrap>
              <Link
                href={{ pathname: '/poetry' }}
              >
                诗经 - V1
              </Link>
            </Typography>
            <Typography sx={{ pl: 2 }} variant="h6" color="inherit" noWrap>
              <Link href={{ pathname: '/poetry/swiper' }}>
                诗经 - V2
              </Link>
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
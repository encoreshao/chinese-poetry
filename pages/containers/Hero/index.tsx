/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'

import { Container, Box, Button, Stack, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          <Image
            src={"https://avatars3.githubusercontent.com/u/30764933?s=200&v=4"}
            width={200}
            height={200}
          />
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          最全中华古诗词数据库, 唐宋两朝近一万四千古诗人, 接近5.5万首唐诗加26万宋诗. 两宋时期1564位词人，21050首词。
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            href="https://github.com/encoreshao/chinese-pooetry"
          >
            查看源码
          </Button>
          <Button
            variant="outlined"
            href="https://encoreshao.github.io/chinese-poetry/"
          >
            站点
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
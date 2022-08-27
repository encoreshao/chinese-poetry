import { Container } from '@mui/material';

import Head from 'next/head'
import Home from './../containers/Home'

const Poetry = () => {
  return (
    <Container sx={{ mt: 8 }} maxWidth={'xl'}>
      <Head>
        <title>中文诗歌 - 诗歌列表 - Encore Shao</title>
      </Head>
      <Home category='lists'/>
    </Container>
  )
}

export default Poetry

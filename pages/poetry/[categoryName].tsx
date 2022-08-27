/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useState, useEffect } from 'react';
import axios from 'axios';

import { remoteDataUrl } from './../utils';
import { CategorySets } from './../utils/constants';

import { Container, Typography, Box } from '@mui/material';

import Shijing from './shijing';
import Yuanqu from './yuanqu';
import Nalanxingde from './nalanxingde';
import Caocao from './caocao';
import Sanzijing from './sanzijing';
import Huajianji from './huajianji';
import Nantang from './nantang';
import Tangshi from './tangshi';
import Songci from './songci';
import Shenglvqimeng from './shenglvqimeng';
import Baijiaxing from './baijiaxing';
import Qianjiashi from './qianjiashi';
import Tangshisanbaisou from './tangshisanbaishou';
import Loading from './../components/loading';

const PoetryDetail = () => {
  const router = useRouter()
  const categoryName = router.query.categoryName

  if (!categoryName) {
    return
  }

  const [data, setData] = useState([])
  const [menus, setMenus] = useState([])
  const [loading, setLoading] = useState(true)

  const identifier = categoryName && CategorySets[categoryName]['identifier']
  const uri = categoryName && CategorySets[categoryName]['uri']

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(remoteDataUrl(uri))
      let resultData = result.data
      if (!Array.isArray(resultData)) { resultData = [resultData] }

      setLoading(false)
      setData(resultData)
      setMenus(resultData.map((item: any) => item[identifier]))
    };

    fetchData();
  }, [categoryName]);

  if (loading) { return ( <Loading /> )}

  return (
    <Container sx={{ mt: 8 }} maxWidth={'xl'}>
      <Head>
        <title>中文诗歌 - {categoryName} - Encore Shao</title>
      </Head>

      <Typography
        sx={{ pt: 8 }}
        variant="h3"
        align="center"
        color="text.primary"
        paragraph
      >
        {categoryName}
      </Typography>

      { categoryName == '花间集' && (<Huajianji data={data} menus={menus} />) }
      { categoryName == '南唐二主词' && (<Nantang data={data} menus={menus} />) }
      { categoryName == '诗经' && (<Shijing data={data} menus={menus} />) }
      { categoryName == '唐诗三百首' && (<Tangshi data={data} menus={menus} />) }
      { categoryName == '宋词三百首' && (<Songci data={data} menus={menus} />) }
      { categoryName == '元曲' && (<Yuanqu data={data} menus={menus} />) }
      { categoryName == '纳兰性德诗集' && (<Nalanxingde data={data} menus={menus} />) }
      { categoryName == '曹操诗集' && (<Caocao data={data} menus={menus} />) }
      { categoryName == '三字经' && (<Sanzijing data={data} menus={menus} />) }
      { categoryName == '千家诗' && (<Qianjiashi data={data} menus={menus} />) }
      { categoryName == '百家姓' && (<Baijiaxing data={data} menus={menus} />) }
      { categoryName == '声律启蒙' && (<Shenglvqimeng data={data} menus={menus} />) }
      { categoryName == '唐诗三百首·蒙学' && (<Tangshisanbaisou data={data} menus={menus} />) }
    </Container>
  )
}

export default PoetryDetail

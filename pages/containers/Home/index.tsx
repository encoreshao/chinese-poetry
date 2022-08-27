/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from '@mui/material';

import DataSwiper from './data_swiper';
import Hero from './../Hero';
import Loading from './../../components/loading';
import { remoteDataUrl } from './../../utils';

export default function Home() {
  const [data, setData] = useState([]);
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(remoteDataUrl('lunyu/lunyu.json'));

      setData(result.data);
      setLoading(false);
      setMenus(result.data.map((item: any) => item['chapter']))
    };

    fetchData();
  }, []);

  if (loading) { return ( <Loading /> )}

  return (
    <>
      <main>
        <Hero />
        <Container sx={{ py: 8, bgcolor: 'background.paper' }} maxWidth={'xl'}>
          {/* <Lists data={data} menus={menus} /> */}
          <DataSwiper data={data} menus={menus} />
        </Container>
      </main>
    </>
  );
}
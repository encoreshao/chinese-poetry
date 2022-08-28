import React from 'react';
import Link from 'next/link'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Hero from './containers/Hero';
import { imageUrl } from './../utils';
import { Categories, CategorySets } from './../utils/Constants';

export default function App() {
  const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  }));

  const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '30vh',
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover .imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover .imageMarked': {
      opacity: 0,
    },
    '&:hover .imageTitle': {
      border: '4px solid currentColor',
      borderRadius: 10,
    },
    '& .imageTitle': {
      position: 'relative',
      padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
      height: 3,
      width: 18,
      background: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));

  const imageItems = [
    { width: '40%' },
    { width: '20%' },
    { width: '40%' },
    { width: '30%' },
    { width: '70%' },
    { width: '40%' },
    { width: '20%' },
    { width: '40%' },
    { width: '50%' },
    { width: '50%' },
    { width: '30%' },
    { width: '40%' },
    { width: '30%' },
    { width: '100%' },
  ];

  const imageURLs: { [index: number]: any } = imageItems.map((_, index) => {
    return Categories[index] && CategorySets[Categories[index]]['img']
  });

  return (
    <Container sx={{ mt: 8, mb: 4 }} maxWidth={ 'xl' }>
      <Hero />

      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {imageItems.map((imageConf: { width: string }, index: number) => (
          <ImageIconButton
            key={`${imageUrl(imageURLs[index])}-${index}`}
            style={{
              width: imageConf.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${imageUrl(imageURLs[index])})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                <Link
                  href={{
                    pathname: '/poetry/[categoryName]',
                    query: { categoryName: Categories[index] },
                  }}
                >
                  {Categories[index]}
                </Link>
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
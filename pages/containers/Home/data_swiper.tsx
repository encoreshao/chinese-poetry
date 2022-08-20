/* eslint-disable react/jsx-key */
import { List, ListItem, ListItemText } from '@mui/material';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";


export default function DataSwiper(props: { data: any }) {
  const { data } = props

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {data.map((result: any) => (
        <SwiperSlide>
          {result['chapter']}

          <List dense={true} disablePadding={true} sx={{ maxHeight: 400 }}>
            {result['paragraphs'].map((text: any) => (
              <ListItem key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
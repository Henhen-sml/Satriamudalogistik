/* eslint-disable import/order */
import { get, ref, child } from 'firebase/database';
import { database } from '../../firebase';
import NextImage from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';

interface Partners {
  title: string;
  url: string;
}
export default function Partners() {

  const [Partner, setPartner] = useState<Partners[]>([]);

  useEffect(() => {
    const DB = ref(database);
    get(child(DB,"MainSection/Partner")).then(async(data) => {
      const dataP = data.val() || {};
      const Array:Partners[] = Object.values(dataP);
      setPartner(Array);
    })
  },[])

  return (
    <PartnersWrapper>
      <Title>CUSTOMER PARTNERSHIP</Title>
      <Swiper
        modules={[EffectCards]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        className="swiper-wrapper"
      >
        {Partner.map((a: any, i) => (
          <SwiperSlide zoom key={i}>
            <Images src={a.url} alt={a.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersWrapper>
  );
}

const Images = styled.img`
width: 200px;
height: 200px;
object-fit: contain;
`

const Title = styled.h3`
  font-size: 2.3rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 0.8;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const PartnersWrapper = styled(Container)`
padding-top: 12rem;
padding-bottom: 12rem;

  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    padding-bottom: 1rem;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

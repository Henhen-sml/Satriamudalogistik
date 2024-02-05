/* eslint-disable import/order */
import { child, get, ref } from 'firebase/database';
import { database } from '../../firebase.js';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { media } from 'utils/media';
import Container from 'components/Container';
import ScrollableBlogPosts from './ScrollableBlogPosts';

interface BannerData {
  title: string;
  url: string;
}

export default function Hero2() {
  const [banner, setBanner] = useState<BannerData[]>([]);

  useEffect(() => {
    const DB = ref(database);
    get(child(DB, 'MainSection/Hero2')).then(async (data) => {
      const banners = data.val() || {};
      const array:BannerData[] = Object.values(banners);
      setBanner(array);
    });
  }, []);

  return (
    <SliderContainer>
            <ScrollableBlogPosts posts={banner} />
    </SliderContainer>
  );
}

const SliderContainer = styled(Container)`
  max-width: 250em;
  height: 46rem;

  & > *:first-child {
    margin-top: 4rem;
  }

  ${media('<=largeDesktop')} {
    max-width: 100%;
    padding: 0;
  }
`;
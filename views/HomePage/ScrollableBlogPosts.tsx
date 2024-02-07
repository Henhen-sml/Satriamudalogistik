/* eslint-disable import/order */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { useResizeObserver } from 'hooks/useResizeObserver';
import { NewsArticle } from 'types';
import { media } from 'utils/media';
import BannerCard from 'components/BannerCard';

interface ScrollableBlogPostsProps {
  posts: NewsArticle[];
}

export default function ScrollableBlogPosts({ posts }: ScrollableBlogPostsProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();

  const oneItemWidth = 350;
  const noOfItems = width / oneItemWidth;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <SwiperContainer ref={ref}>
        {hasMounted && (
          <Swiper modules={[EffectCards]} slidesPerView={noOfItems} spaceBetween={25}>
            {posts.map((singlePost, i) => (
              <SwiperSlide key={i}>
                <BannerCard
                  title={singlePost.title}
                  url={singlePost.url}
                  />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </SwiperContainer>
  );
}

const SwiperContainer = styled(Container)`
  height: 100%;

  & > *:first-child {
    margin-top: 4rem;
  }

  ${media('<=largeDesktop')} {
    max-width: 100%;
    padding: 0;
  }
`;

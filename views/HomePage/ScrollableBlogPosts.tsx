import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { useResizeObserver } from 'hooks/useResizeObserver';
import { NewsArticle } from 'types';
import { media } from 'utils/media';
import NewsCard from 'components/NewsCard';
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
          <Swiper modules={[A11y]} slidesPerView={noOfItems} spaceBetween={25} loop>
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

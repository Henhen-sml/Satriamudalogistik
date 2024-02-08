/* eslint-disable import/order */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getSingleNews } from 'utils/newsFetcher';
import BasicCard3 from 'components/BasicCard3';


export default function BeritaLogistik() {
  const [news, setNews] = useState([])

  useEffect(() => {
    const pilihBeritaByKategory = async (category: string) => {
      const selectedNews:any = await getSingleNews();
      setNews(selectedNews);
      console.log(selectedNews);
    }
    pilihBeritaByKategory('otomotiv')
  },[])

  return (
    <ScrollableContainer>
      <Container>
        {news.slice(0, 10).map((news: any, i) => (
          <AnimatedElement key={i}>
          <BasicCard3 title={news.title} url={news.thumbnail} desc={news.description} />
            </AnimatedElement>
          ))}
      </Container>
    </ScrollableContainer>
  );
}

const ScrollableContainer = styled.div`
  max-width: 120rem;
  height: 100%;
  -webkit-overflow-scrolling: touch; 

`

const AnimatedElement = styled.div`
  padding: 2rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(0.9);
  }
  `;
  
 const Container = styled.div`
  overflow-x: auto;
  display: flex;
  align-items: center;
  padding: 2rem;
  ` 
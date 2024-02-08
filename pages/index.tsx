/* eslint-disable import/order */
import { child, get, ref  } from 'firebase/database';
import { database } from '../firebase.js';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled, {keyframes} from 'styled-components';
import BasicSection from 'components/BasicSection';
import BasicSection2 from 'components/BasicSection2';
import { EnvVars } from 'env';
import Features from 'views/HomePage/Features';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import Hero2 from 'views/HomePage/Hero2';
import NewsCard from 'components/NewsCard';
import { formatDate } from 'utils/formatDate';
import { getSingleNews } from 'utils/newsFetcher';
import BasicSection3 from 'components/BasicSection3';

interface AboutDatas {
  overtitle: string;
  title: string;
  p1: string;
  li:[];
}

export default function Homepage() {
  
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const [AboutData , setAboutData] = useState<AboutDatas[]>([]);
  const [news, setNews] = useState([])
  const HeroSection = styled.div`
    animation: ${isAnimated ? fadeInUp : 'none'} 1s ease-in-out;
  `;

  useEffect(() => {
    setIsAnimated(true);
    const DB = ref(database);
    get(child(DB, 'MainSection/BasicSection')).then(async(data) => {
      const Basic = data.val() || {};
      const array:AboutDatas[] = Object.values(Basic);
      setAboutData(array);
    })

    const pilihBeritaByKategory = async (category: string) => {
      const selectedNews:any = await getSingleNews();
      setNews(selectedNews);
      console.log(selectedNews);
    }
    pilihBeritaByKategory('otomotiv')

  },[isAnimated])
  
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Satria Muda Logistics|We serve better in logistics"
        />
      </Head>
      <HomepageWrapper>
        <Hero />
            <HeroSection>
                <Hero2 />
                {AboutData.map((a, i) => {
                  console.log(a)
                  return(
                    <BasicSection key={i} title={a.title} reversed>
                    <p>
                      {a.p1}
                    </p>
                    <ul>
                      {a.li ? (
                        Object.values(a.li).map((val, i) => (
                          <li key={i}>{val}</li>
                          )
                      )) : null}
                    </ul>
                  </BasicSection>
                    )
                  })}
                    <BasicSection2 title='Our Services'>
                        <Features />
                    </BasicSection2>
            </HeroSection>
              <Partners />
                  <BasicSection3 title="Aktifitas Terbaru Kami">
                    <ScrollableContainer>
                      <Container>
                        {news.slice(0, 10).map((news: any, i) => (
                          <NewsCard
                          key={Math.random() * i}
                          title={news.title}
                          thumbnail={news.thumbnail}
                          pubDate={formatDate(news.pubDate)}
                          link={news.link}
                          description={news.description}
                          />
                          ))}
                      </Container>
                    </ScrollableContainer>
                  </BasicSection3>

      </HomepageWrapper>
    </>
  );
}

const fadeInUp = keyframes`
from {
  opacity: 0;
  transform: translateY(20px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const ScrollableContainer = styled.div`
  max-width: 120rem;
  height: 100%;
  -webkit-overflow-scrolling: touch; 
`
  
 const Container = styled.div`
  overflow-x: auto;
  display: flex;
  align-items: center;
  padding: 2rem;
  ` 
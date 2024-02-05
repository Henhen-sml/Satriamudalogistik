/* eslint-disable import/order */
import { InferGetStaticPropsType } from 'next';
import { useEffect,useState } from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import NewsCard from 'components/NewsCard';
import { NewsArticle } from 'types';
import { media } from 'utils/media';
import { getSingleNews } from 'utils/newsFetcher';
import BasicSection from 'components/BasicSection';


export default function News({ news }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [newsA, setNews] = useState<NewsArticle[]>(news);
  const [displayedNews, setDisplayedNews] = useState<NewsArticle[]>(news.slice(0, 5));
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const pilihBeritaByKategory = async (category: string) => {
      const selectedNews = await getSingleNews();
      setNews(selectedNews);
      setDisplayedNews(selectedNews.slice(0, 5));
      setShowMore(true);
    }
    pilihBeritaByKategory('otomotiv')
  },[])

  const loadMoreNews = () => {
    const currentCount = displayedNews.length;
    const nextCount = currentCount + 5;
    const moreNews = newsA.slice(currentCount, nextCount);
    setDisplayedNews([...displayedNews, ...moreNews]);
    if (nextCount >= newsA.length) {
      setShowMore(false);
    }
  }
  
  const formatDate = (pubDate: string) => {
    const date = new Date(pubDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes} ${day}-${month}-${year}.`;
  
  }

  return (
    <BasicSection
    title="Berita Seputar Otomotif"
    >
      <CustomAutofitGrid>
        {displayedNews.map((news: any, i) => (
          <NewsCard
            key={Math.random() * i}
            title={news.title}
            thumbnail={news.thumbnail}
            pubDate={formatDate(news.pubDate)}
            link={news.link}
            description={news.description}
            />
        ))}
      </CustomAutofitGrid>
      <Wrapper2>
      {showMore && <ShowMoreButton onClick={loadMoreNews}>Lihat Lainnya</ShowMoreButton>}
      </Wrapper2>
    </BasicSection>
  );
}


const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  min-width: 3rem;
  margin-left: auto;
  margin-right: auto;
  white-space: nowrap;
  margin-bottom: 3rem;
  justify-content: center;
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }

  .article-card-wrapper {
    max-width: 100%;
  }
`;

const ShowMoreButton = styled.button`
  font-size: 3rem;
  margin: 2rem;
  padding: 1rem 1.5rem;
  background-color: #0074D9;
  color: white;
  border: none;
  cursor: pointer;
`;

export async function getStaticProps() {
  return {
    props: {
      news: await getSingleNews(),
    },
  };
}
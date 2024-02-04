import NextLink from 'next/link';
import styled from 'styled-components';
import { media } from 'utils/media';

export interface BannerProps {
  title: string;
  url: string;
}

export default function BannerCard({ url, title }: BannerProps) {
  return (
    <ArticleCardWrapper className="article-card-wrapper">
          <ImageContainer>
            <ImageHolder src={url} alt={title} />
          </ImageContainer>
      </ArticleCardWrapper>
  );
}

const ImageHolder = styled.img`
  position: flex;
  display: block;
  max-height: 25rem;
  max-width: 25rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
`

const ImageContainer = styled.div`
  position: flex;
  height: 100%;
  
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding: 5%;
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const ArticleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 35rem;
  max-width: 35rem;
  overflow: hidden;
  text-decoration: none;
  border-radius: 0.6rem;
  background: rgb(var(--cardBackground));
  color: rgb(var(--text));
`;
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import RichText from './RichText';

export interface BasicSectionProps {
  title: string;
  reversed?: boolean;
}

export default function BasicSection2({ title, reversed, children }: PropsWithChildren<BasicSectionProps>) {
  return (
    <BasicSectionWrapper2>
      <ContentContainer>
        <Title>{title}</Title>
        <RichText>{children}</RichText>
      </ContentContainer>
    </BasicSectionWrapper2>
  );
}


const Title = styled.h1`
  font-size: 4.2rem;
  font-weight: bold;
  line-height: 1.1;
  padding-top: 2rem;
  padding-left: 0.6rem;
  letter-spacing: -0.03em;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    font-size: 3.6rem;
    margin-bottom: 2rem;
  }
`;

const ContentContainer = styled.div`
  background: rgb(255,255,255);
  border-radius: 3rem;
  padding: 3rem;
  @media (max-width: 1200px){
    max-width: 100%;
  }
  `;
  
  const BasicSectionWrapper2 = styled(Container)`
  display: flex;
  overflow: hidden;
  border-radius: 20px;
  background: rgb(255,255,255);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

/* eslint-disable import/order */
import { get, ref, child } from 'firebase/database';
import {database} from '../../firebase';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

interface PostData {
  desc : string;
  title: string;
  url : string;
}

export default function Features() {
  const [features, setFeatures] = useState<PostData[]>([]);

  useEffect(() => {
    const DB = ref(database);
    get(child(DB, 'MainSection/Features')).then(async(data) => {
        const Post: PostData[] = data.val() || {};
        const array = Object.values(Post);
        setFeatures(array);
    })
  },[])
  return (
    
    <Container>
      <CustomAutofitGrid>
        {features.map((a) => (
        <AnimatedElement key={a.title}>
          <BasicCard  {...a} />
        </AnimatedElement>
          ))}
      </CustomAutofitGrid>
    </Container>
  );
}
const AnimatedElement = styled.div`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(0.9);
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

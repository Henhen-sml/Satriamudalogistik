/* eslint-disable import/order */
import { get, ref, child } from 'firebase/database';
import {database} from '../../firebase';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BasicCard2 from 'components/BasicCard2';

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
    <ScrollableContainer>
      <Container>
            {features.map((a) => (
            <AnimatedElement key={a.title}>
              <BasicCard2  {...a} />
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
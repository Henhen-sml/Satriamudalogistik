import { child, get, ref  } from 'firebase/database';
import { database } from '../firebase.js';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled, {keyframes} from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import Features from 'views/HomePage/Features';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import Hero2 from 'views/HomePage/Hero2';

export default function Homepage() {
  
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const [AboutData , setAboutData] = useState<unknown[]>([]);
  
  const HeroSection = styled.div`
    animation: ${isAnimated ? fadeInUp : 'none'} 1s ease-in-out;
  `;

  useEffect(() => {
    setIsAnimated(true);
    const DB = ref(database);
    get(child(DB, 'MainSection/BasicSection')).then(async(data) => {
      const Basic = data.val() || {};
      const array = Object.values(Basic);
      setAboutData(array);
    })
  },[isAnimated])
  
  
  console.log(AboutData);
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Satria Muda Logistics "
        />
      </Head>
      <HomepageWrapper>
        <Hero />
            <HeroSection>
                <Hero2 />
                {AboutData.map((a: any, i) => {
                  console.log(a)
                  return(
                    <BasicSection key={i} title={a.title} overTitle={a.overTitle} reversed>
                    <p>
                      {a.p1}
                    </p>
                    <ul>
                      <li>{a.li1}</li>
                      <li>{a.li2}</li>
                      <li>{a.li3}</li>
                      <li>{a.li4}</li>
                      <li>{a.li5}</li>
                    </ul>
                  </BasicSection>
                    )
                  })}
              <Partners />
            </HeroSection>
          <Features />
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

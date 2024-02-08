/* eslint-disable import/order */
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled, {keyframes} from 'styled-components';
import BasicSection from 'components/BasicSection';
import BasicSection2 from 'components/BasicSection2';
import { EnvVars } from 'env';
import Features from 'views/HomePage/Features';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import BasicSectionOurExperience from 'components/BasicSectionOurExperience'
import OurExperiences from 'views/HomePage/OurExperience';
import BeritaLogistik from 'views/HomePage/BeritaLogistik';

export default function Homepage() {
  
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const HeroSection = styled.div`
    animation: ${isAnimated ? fadeInUp : 'none'} 1s ease-in-out;
  `;


  useEffect(() => {
    setIsAnimated(true);
  },[])
  
  return (
    <>
      <Head>
      <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Satria Muda Logistics | We serve better in logistics"
        />
      </Head>
      <HomepageWrapper>
        <Hero />
            <HeroSection>
              <BasicSection title='PT SATRIA MUDA LOGISTIC' reversed>
                <p>SML established in 2022 and currently has
                  strategic partners at sea and major airports in all
                  regions in Indonesia. We are specialize in sea and
                  air freight, consolidation, packaging, transport &
                  logistics, warehousing & customs clearance.
                  </p>
                  <br />
                  <p>That&apos;s why we will continue to strive, every day, 
                    to deliver a more connected, agile and 
                    sustainable future for global logistics. that is our goal.
                  </p>
              </BasicSection>
            </HeroSection>

            <BasicSection2 title='OUR SERVICES'>
              <Features />
            </BasicSection2>

            <HeroSection>
              <BasicSection title='Why PT SATRIA MUDA LOGISTIC ?' reversed>
                <p>Project Cargo remains SML&apos;s
                  core business, with a primary
                  focus on industries related to
                  Automotive, Oil and Gas,
                  Energy, Power Generation,
                  Mining, Industrial
                  Commodities, Metals and
                  Infrastructure projects.
                  </p>
                  <br />
                  <p>That&apos;s why we will continue to strive, every day, 
                    to deliver a more connected, agile and 
                    sustainable future for global logistics. that is our goal.
                  </p>
                  <ul>
                    <li>Focus on our customer&apos;s needs.</li>
                    <li> Preserve the trust, integrity and
                        accountability in our services.</li>
                    <li>Conduct ethical business practices.</li>
                    <li>Strengthen the partnership with all
                        our internal and external customers.</li>
                  </ul>
              </BasicSection>
            </HeroSection>

            <BasicSectionOurExperience title="OUR EXPERIENCE">
                <OurExperiences />
            </BasicSectionOurExperience>

                <Partners />

            <BasicSection2 title="Aktifitas Terbaru Kami">
                <BeritaLogistik />
            </BasicSection2>
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
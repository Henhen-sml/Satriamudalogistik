/* eslint-disable import/order */
import BasicSection from 'components/BasicSection';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Head from 'next/head';
import { EnvVars } from 'env';
import Image from 'next/image';
import BasicSectionNonTitle from 'components/BasicSectionNonTitle';
import OurExperiences from 'views/HomePage/OurExperience';
import Partners from 'views/HomePage/Partners';
import { media } from 'utils/media';

export default function Profile() {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
    const backgroundImage = "https://firebasestorage.googleapis.com/v0/b/satria-muda-logistic.appspot.com/o/long%20banner.png?alt=media&token=494216b8-998b-4450-8f89-dba858917fe3"
    const HeroSection:any = styled.div`
        animation: ${isAnimated ? fadeInUp : 'none'} 1.5s ease-in-out;
        margin: 1.5rem 0;
        `;
        
  useEffect(() => {
    setIsAnimated(true);
  }, [])
  return (
    <Wrapper>
      <Head>
        <title>Our Profile | {EnvVars.SITE_NAME}</title>
          <meta
            name="description"
            content="Satria Muda Logistics | Tracking Your Goods ?"
          />
      </Head>
      <ImagesWrapper>
        <ImageBgWrapper src={backgroundImage} />
      </ImagesWrapper>
          <BasicSection title="COMPANY PROFILE">
            <HeroSection>
              <Container>
                <TextWrapper>
                  <Text>
                  SML established in 2022 and currently has <strong>strategic partners at sea and major airports in all 
                    regions in Indonesia</strong>. 
                    We specialize in sea and air freight,
                    consolidation, packaging, transport & logistics,
                    warehousing & custom clearance.
                  </Text>
                </TextWrapper>
                    <Images src={'https://static.vecteezy.com/system/resources/previews/024/109/098/original/3d-icon-cargo-ship-isolated-on-transparent-background-png.png'}
                    width={1} height={1} alt={'cargo-ship'} />
              <TextWrapper>
                <Text>
                  Thats why we still continue to strive, every day, 
                  to deliver a more connected, 
                  agile and sustainable future for global logistics. 
                  thats our goal.
                </Text>
              </TextWrapper>
              </Container>
              </HeroSection>
          </BasicSection>

          <VisionMissionWrapper>
            <BasicSectionNonTitle>
                <Container>
                  <Images2 src={'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/59959/movers-carry-box-clipart-md.png'} width={1} height={1} alt={'handleBox'} />
                    <BasicSection title="VISION">
                      <HeroSection>
                        <TextWrapper>
                          <Text>
                            Become a Logistics Company with integrated solution, 
                            Partnership also connecting people, businesses, 
                            and communities to a better synergy.
                          </Text>
                        </TextWrapper>
                      </HeroSection>
                    </BasicSection>
                </Container>      
            </BasicSectionNonTitle>
            <BasicSectionNonTitle>
                  <Container>
                    <TextWrapper>
                      <BasicSection title="MISSION">
                          <HeroSection>
                            <p>
                              Providing excellent service for customer satisfaction 
                              by applying insight, service quality, 
                              and innovation to create sustainable growth for business.
                            </p>
                          </HeroSection>
                      </BasicSection>
                    </TextWrapper>
                  <Images3 src={'https://cdni.iconscout.com/illustration/premium/thumb/man-engineer-holding-plan-6577382-5584061.png'} width={1} height={1} alt={'handleBox'} />
                  </Container>
            </BasicSectionNonTitle>
          </VisionMissionWrapper>

      <BasicSection title="OUR VALUE">
        <HeroSection>
          <ul>
            <li>Focus on customers needs</li>
            <li>Preserve the trust, integrity and accountability in our services</li>
            <li>Conduct ethical business practices</li>
            <li>Strengthen the partnership with all our internal and external customers</li>
          </ul>
        </HeroSection>
      </BasicSection>
        <VisionMissionWrapper>
              <Title>OUR EXPERIENCE</Title>
          <BasicSectionNonTitle>
            <OurExperiences />
          </BasicSectionNonTitle>
        </VisionMissionWrapper>
        <Partners />
    </Wrapper>
  )
}
const ImagesWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 40%;
  margin-top: -5%;
`;

const ImageBgWrapper = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding-top: -10rem;
`;

const Container = styled.div`
display: flex;
align-items: center;
gap: 2px;
`;

const TextWrapper = styled.div`
flex: 1;
`;

const Text = styled.p`
  position: relative;
  z-index: 1;
`
const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  padding-top: 2rem;
  padding-left: 0.6rem;
  letter-spacing: -0.03em;
  color: rgb(var(--textSecondary));

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const Waveing = keyframes`
0% {
  transform: translateY(10%);
}
50% {
  transform: translateY(-10%);
}
100% {
  transform: translateY(10%);
}
`

const Images = styled(Image)`
width: 256px;
height: 256px;
order: 1; /* Mengatur urutan gambar ke posisi terakhir */
animation: ${Waveing} 6s linear infinite;
@media (max-width: 512px){
  width: 120px;
  height: 120px;
  order: 1;
}
`

const Images2 = styled(Image)`
width: 260px;
height: 200px;
order: 0; 
@media (max-width: 512px){
  width: 120px;
  height: 80px;
  order: 0;
}
`

const Images3 = styled(Image)`
width: 200px;
height: 350px;
order: 1; 
transform: scaleX(-1);
@media (max-width: 512px){
  width: 200px;
  height: 160px;
  order: 1;
}
`

const Wrapper = styled.div`

`

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

const VisionMissionWrapper = styled.div`
background: rgb(var(--navbarBackground));
box-shadow: 0px 0px 20px rgba(0,0,0, 0.5);
max-width: 100%;
color: white;
`



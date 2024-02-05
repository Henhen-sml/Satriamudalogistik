/* eslint-disable import/order */
import BasicSection from 'components/BasicSection';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

export default function ProdukLayanan() {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
    const Banner = "https://firebasestorage.googleapis.com/v0/b/satria-muda-logistic.appspot.com/o/long%20banner.png?alt=media&token=494216b8-998b-4450-8f89-dba858917fe3"
    const LogisticImg = "https://firebasestorage.googleapis.com/v0/b/satria-muda-logistic.appspot.com/o/ship.png?alt=media&token=f15bf57d-ef8d-4780-8387-c53f185f5499"
    const CustomClearImg = "https://firebasestorage.googleapis.com/v0/b/satria-muda-logistic.appspot.com/o/warehouse.png?alt=media&token=067e675b-bb07-4f47-b46f-eeacb34cf0ed"
    const SpecialHandlingImg = "https://firebasestorage.googleapis.com/v0/b/satria-muda-logistic.appspot.com/o/special-equipment.png?alt=media&token=dd8be9c6-e396-47b3-a6d4-884754a5457b"
    const HeroSection:any = styled.div`
        animation: ${isAnimated ? fadeInUp : 'none'} 1.5s ease-in-out;
        margin: 1.5rem 0;
        `;
        
  useEffect(() => {
    setIsAnimated(true);
  }, [])

  return (
    <Wrapper>
            <ImageBgWrapper src={Banner} />
        <BasicSection title="PRODUCTS AND SERVICES">
                    <HeroSection>
                    <p>
                    Project Cargo remains SMLs core business, with a primary
                    focus on industries related to Automotive, Oil and Gas, Energy,
                    Power Generation, Mining, Industrial Commodities, Metals and
                    Infrastructure projects.
                    </p>
                    </HeroSection>
            </BasicSection>
      <BasicSection title="LOGISTICS">
        <HeroSection>
            <ImageFill src={LogisticImg} />
                <ul>
                    <li>Sea Freight Direct Consolidation(LCL), Sea Freight FCL</li>
                    <li>Air Freight</li>
                    <li>Trucking and Distribution</li>
                </ul>
        </HeroSection>
      </BasicSection>
      <BasicSection title="CUSTOM CLEARANCE">
        <HeroSection>
            <ImageFillNoAnimation src={CustomClearImg} />
                <ul>
                    <li>Warehouse and Storage</li>
                    <li>Export & Import Services</li>
                    <li>Custom Brokerage</li>
                </ul>
        </HeroSection>
      </BasicSection>
      <BasicSection title="SPECIAL HANDLING & MOVEMENT">
        <HeroSection>
            <ImageFillNoAnimation src={SpecialHandlingImg} />
                <ul>
                    <li>Door to door delivery services</li>
                    <li>Project Cargo</li>
                    <li>Heavy Equipment</li>
                </ul>
        </HeroSection>
      </BasicSection>
    </Wrapper>
  )
}

const ImageBgWrapper = styled.img`
width: 100%;
height: auto;
display: absolute;
padding: 0;
transform: translate(0%, -20%);
`;

const waveAnimation = keyframes`
  0% {
    transform: translateX(120%) translateY(0);
  }
  50% {
    transform: translateX(70%) translateY(-20%);
  }
  100% {
    transform: translateX(-170%) translateY(20%);
  }
`;


const ImageFill = styled.img`
width: 45%;
display: flex;
max-width: 25rem;
padding: 0;
z-index: -1;
overflow: hidden;
animation: ${waveAnimation} 20s linear infinite;
`
const ImageFillNoAnimation = styled.img`
width: 45%;
max-width: 25rem;
display: flex;
padding: 0;
z-index: -1;
overflow: hidden;
`

const Wrapper = styled.div`

`;

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



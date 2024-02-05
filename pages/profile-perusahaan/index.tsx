import {child , get, ref} from 'firebase/database';
import {database} from '../../firebase';
import BasicSection from "components/BasicSection";
import { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components';
import BasicCard from 'components/BasicCard';

interface Experience{
  title: string;
  desc: string;
  url: string;
}

export default function Profile() {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const [exp, setExp] = useState<Experience[]>([]);
    const backgroundImage = "https://firebasestorage.googleapis.com/v0/b/satria-muda-logistic.appspot.com/o/long%20banner.png?alt=media&token=494216b8-998b-4450-8f89-dba858917fe3"
    const ShipImage = "https://firebasestorage.googleapis.com/v0/b/satria-muda-logistic.appspot.com/o/ship.png?alt=media&token=f15bf57d-ef8d-4780-8387-c53f185f5499"
    const HeroSection:any = styled.div`
        animation: ${isAnimated ? fadeInUp : 'none'} 1.5s ease-in-out;
        margin: 1.5rem 0;
        `;
        
  useEffect(() => {
    const DB = ref(database);
    get(child(DB, "MainSection/Experience")).then(async(data) => {
      const Exp = data.val() || {};
      const Array:Experience[] = Object.values(Exp);
      setExp(Array);
    })
    setIsAnimated(true);
  }, [])
  return (
    <Wrapper>
            <ImageBgWrapper src={backgroundImage} />
        <BasicSection title="PROFILE">
                    <HeroSection>
                    <p>
                        SML established in 2022 and currently has <strong>strategic partners at sea and major airports in all regions in Indonesia</strong>. We specialize in sea and air freight, consolidation, packaging, transport & logistics, warehousing & custom clearance.
                    </p>
                    <br />
                    <p>
                        That's why we still continue to strive, every day, to deliver a more connected, agile and sustainable future for global logistics. that's our goal.
                    </p>
                    </HeroSection>
            </BasicSection>
      <BasicSection title="VISION">
        <HeroSection>
          <p>
            Become a Logistics Company with integrated solution, Partnership also connecting people, businesses, and communities to a better synergy.
          </p>
        </HeroSection>
      </BasicSection>
          <ImageFill src={ShipImage} />
    <BasicSection title="MISSION">
        <HeroSection>
          <p>
            Providing excellent service for customer satisfaction by applying insight, service quality, and innovation to create sustainable growth for business.
          </p>
        </HeroSection>
    </BasicSection>
      <BasicSection title="OUR VALUE">
        <HeroSection>
          <ul>
            <li>Focus on customer's needs</li>
            <li>Preserve the trust, integrity and accountability in our services</li>
            <li>Conduct ethical business practices</li>
            <li>Strengthen the partnership with all our internal and external customers</li>
          </ul>
        </HeroSection>
      </BasicSection>

        <BasicSection title={"OUR EXPERIENCE"}>
        {exp.map((a, i) => {
          return(
            <HeroSection key={i}>
                <BasicCard title={a.title} desc={a.desc} url={a.url}/>
            </HeroSection>
          )
        })}
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
padding: 0;
z-index: -1;
overflow: hidden;
animation: ${waveAnimation} 20s linear infinite;
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



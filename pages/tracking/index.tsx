/* eslint-disable import/order */
import {child, get, ref} from 'firebase/database';
import { database } from '../../firebase';
import styled, { keyframes } from "styled-components";
import { media } from 'utils/media';
import { useEffect, useState } from "react";
import BasicSection from "components/BasicSection";
import RichText from '../../components/RichText';
import Container from '../../components/Container';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {EnvVars} from '../../env';
import BasicSection2 from 'components/BasicSection2';
import BeritaLogistik from 'views/HomePage/BeritaLogistik';


export default function Tracking() {
  const [isSearch, setIsSearch] = useState(false);
  const [data, setData] = useState<unknown[]>([]);
  const [noResi, setNoResi] = useState("");
  const [search, setSearch] = useState(false);
  const [ Warning, setWarning ] = useState("");
  const router = useRouter();
  const {query} = router.query;
  const ShipImage = "https://firebasestorage.googleapis.com/v0/b/satria-muda-logistic.appspot.com/o/ship.png?alt=media&token=f15bf57d-ef8d-4780-8387-c53f185f5499"

  const queryString = typeof query === 'string' ? query : Array.isArray(query) ? query[0] : '';

  useEffect(() => {
    if(queryString){
        setNoResi(queryString);
    }
  },[queryString])


  function cekNoResi(){
    setSearch(true)
    setTimeout(() => {
      if(!noResi){
        setWarning('Input Your Resi ID')
        setSearch(false)
    }else{
        const DB = ref(database);
        const resiRef  = child(DB, `dataInput/resi`)
        const targetElement = document.getElementById('CekResi');
        get(resiRef).then(async(datas) => {
            const Data = datas.val() || {};
            const ResiData = Data[noResi];
            if(!ResiData){
                setIsSearch(false);
                setWarning("Resi Number Can't be found!");
                setSearch(false);
            }else{
                const Array = Object.values(Data[noResi]);
                setIsSearch(true);
                setWarning("");
                setData(Array);
                if(targetElement){
                  targetElement.scrollIntoView({ behavior: "smooth" });
                }
                setSearch(false);
            }
        }).catch((err) => {
            setIsSearch(false);
            setSearch(false);
            setWarning("Resi Number Can't be found!");
        })
    } 
  }, 5000)
  }
  


 function inputResi(e:string){
        setWarning("");
        setNoResi(e);
 }
  return (
    <>
      <Head>
      <title>Tracking | {EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Satria Muda Logistics | Tracking Your Goods ?"
        />
      </Head>
      <MainWrapper>
        <Wrapper>
          <BasicSection title="Tracking Goods">
            {search ? (
              <>
                <ImageWrapper>
                  <ImageFill src={ShipImage} />
                </ImageWrapper>
              </>
            ) : (
              <>
                <ImageWrapper>
                  <ImageFill2 src={ShipImage} />
                </ImageWrapper>
              </>
            )}
            <Warn>{Warning}</Warn><br/>
            <Input
                placeholder={"Resi Number Here!"}
                value={noResi}
                onChange={(e) => inputResi(e.target.value)}
                /><br />
                <Button onClick={() => cekNoResi()}>Find Goods!</Button>
            </BasicSection>
        </Wrapper>
            {isSearch ? (
            <WrapperCekResi >
                <Divider />
                    {data.map((a:any, i) => {
                        return(
                            <>
                                <BasicSectionWrapper key={i}>
                                    <ContentContainer>
                                        <Title>{a.noResi}</Title>
                                        <RichText>
                                            <HorizonWrapper>
                                                <p>Customers Name:<br/><strong>{a.namaU}</strong></p>
                                                <p>Goods Name:<br/><strong>{a.services}</strong></p>
                                            </HorizonWrapper>
                                            <HorizonWrapper>
                                                <p>Delivery From:<br/><strong>{a.from}</strong></p>
                                                <p>Delivery To:<br/><strong>{a.dest}</strong></p>
                                                <p>POD Date:<br/><strong>{a.timeMake}</strong></p>
                                            </HorizonWrapper>
                                            <HorizonWrapper>
                                                <p>Estimated Time Departure:<br/><strong>{a.timeMake}</strong></p>
                                                <p>Estimated Time Arrival:<br/><strong>{a.timeMake}</strong></p>
                                                <p>Actual Time Departure:<br/><strong>{a.timeMake}</strong></p>
                                                <p>Actual Time Arrival:<br/><strong>{a.timeMake}</strong></p>
                                                <br />
                                            </HorizonWrapper>
                                            <HorizonWrapper2>
                                                Status:<br/><strong>{a.status}</strong>
                                            </HorizonWrapper2>
                                        </RichText>
                                    </ContentContainer>
                                </BasicSectionWrapper>
                            </>
                        )
                    })}
            </WrapperCekResi>
            ) : (
            <div id='CekResi'>
              <BasicSection2 title='Berita Pengiriman'>
                <BeritaLogistik />
              </BasicSection2>
            </div>
            )}    
      </MainWrapper>
    </>
  );
}

const waveAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-300%);
  }
`;

const waveAnimation2 = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(10%);
  }
`;

const ImageFill = styled.img`
width: 25%;
display: flex;
padding: 0;
z-index: -1;
overflow: hidden;
animation: ${waveAnimation} 5s linear forwards;
`

const ImageFill2 = styled.img`
width: 25%;
display: flex;
padding: 0;
z-index: -1;
overflow: hidden;
animation: ${waveAnimation2} 3s linear infinite;
`

const ImageWrapper = styled.div`
display: flex;
justify-content: center;
`

const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const BasicSectionWrapper = styled(Container)`
  display: flex;
  align-items: center;



  ${media('<=desktop')} {
    flex-direction: column;

  }
`;

const HorizonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  font-size: 2rem;
  padding: 5rem;
  border: 2px solid black;
  margin: 5px;
  p {
    margin: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    p {
        padding-top: 1rem;
        text-align: center;
    }
}
`;

const HorizonWrapper2 = styled.div`
  align-items: center;
  padding-top: 0.5rem;
  padding: 2rem;
  text-align:center;
  font-size: 3rem;
  border: 2px solid black;
  margin: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    p {
        padding-top: 1rem;
        text-align: center;
    }
}
`;

const Divider = styled.div`
  position: relative;
  padding-top: 1rem;
    margin-bottom: 7rem;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%; 
    height: 1.5px; 
    background-color: gray;
    transform: translateX(-50%);
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.7);
  }
`;

const Warn = styled.p`
color: red;
`

const MainWrapper = styled.div`

`

const Wrapper = styled.div`
display: absolute;
justify-content: center;
text-align: center;

& > :last-child {
  margin-bottom: 15rem;
};
`

const WrapperCekResi = styled.div`
  display: absolute;
  padding-top: 2rem;
  & > :last-child {
    margin-bottom: 15rem;
  };
  
`;

const Input = styled.input`
  border: 1px solid rgb(var(--inputBackground));
  background: rgb(var(--inputBackground));
  border-radius: 0.6rem;
  width: 100%;
  max-width: 30rem;
  text-align: center;
  height: 4rem;
  font-size: 1.6rem;
  padding: 1.8rem;
  box-shadow: var(--shadow-lg);
  
  &:focus {
      outline: none;
      box-shadow: 6px 6px 6px rgba(100,255, 0, 0.2);
    }
`;
    
    const Button = styled.button`
    border: none;
    background: none;
    text-decoration: none;
    background: white;
    text-align: center;
    margin-top: 2rem;
    padding: 1.75rem 2.25rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-family: var(--font);
    font-weight: bold;
    border-radius: 2rem;
    transition: transform 0.3s;
    backface-visibility: hidden;
    will-change: transform;
    cursor: pointer;
    box-shadow: 0px 6px 0px rgba(100,255, 0, 0.2);
    
    span {
        margin-left: 2rem;
    }
    
    &:hover {
        transform: scale(1.125);
    }
`;
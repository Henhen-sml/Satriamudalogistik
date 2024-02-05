/* eslint-disable import/order */
import {child, get, ref} from 'firebase/database';
import { database } from '../../firebase';
import styled from "styled-components";
import { media } from 'utils/media';
import { useState } from "react";
import BasicSection from "components/BasicSection";
import RichText from '../../components/RichText';
import Container from '../../components/Container';

export default function Tracking() {
  const [isSearch, setIsSearch] = useState(false);
  const [data, setData] = useState<unknown[]>([]);
  const [noResi, setNoResi] = useState("");
  const [ Warning, setWarning ] = useState("");

 function cekNoResi(){
    if(!noResi){
        setWarning('Silahkan Masukan Nomor Resi Terlebih dahulu')
    }else{
        const DB = ref(database);
        const resiRef  = child(DB, `dataInput/resi`)
        get(resiRef).then(async(datas) => {
            const Data = datas.val() || {};
            const ResiData = Data[noResi];
            if(!ResiData){
                setIsSearch(false);
                setWarning("No Resi Tidak di temukan/Salah");
            }else{
                const Array = Object.values(Data[noResi]);
                setIsSearch(true);
                setWarning("");
                setData(Array);
            }
        }).catch((err) => {
            setIsSearch(false);
            setWarning("No Resi Tidak di temukan/Salah");
        })
    } 
}
 function inputResi(e:string){
    if(e){
        setWarning("");
        setNoResi(e);
    }
 }
  return (
      <MainWrapper>
        <Wrapper>
          <BasicSection title="Lacak Pengiriman">
            <Warn>{Warning}</Warn><br/>
            <Input
                placeholder={"Masukan nomor Resi"}
                onChange={(e) => inputResi(e.target.value)}
                /><br />
                <Button onClick={(e) => cekNoResi()}>Tracking</Button>
            </BasicSection>
        </Wrapper>
            {isSearch ? (
            <WrapperCekResi>
                <Divider />
                    {data.map((a:any, i) => {
                        console.log(a)
                        return(
                            <>
                                <BasicSectionWrapper key={i}>
                                    <ContentContainer>
                                        <Title>{a.noResi}</Title>
                                        <RichText>
                                            <HorizonWrapper>
                                                <p>Customers Name:<br/><strong>{a.namaU}</strong></p>
                                                <p>Goods Name:<br/><strong>{a.services}</strong></p>
                                                <p>Delivery From:<br/><strong>{a.from}</strong></p>
                                                <p>Delivery To:<br/><strong>{a.dest}</strong></p>
                                                <p>POD Date:<br/><strong>{a.timeMake}</strong></p>
                                            </HorizonWrapper>
                                            <HorizonWrapper>
                                                <p>Estimated Time Delivery:<br/><strong>{a.timeMake}</strong></p>
                                                <p>Estimated Time Arrived:<br/><strong>{a.timeMake}</strong></p>
                                                <p>Actual Time Delivery:<br/><strong>{a.timeMake}</strong></p>
                                                <p>Actual Time Arrived:<br/><strong>{a.timeMake}</strong></p>
                                                <br />
                                            </HorizonWrapper>
                                            <HorizonWrapper>
                                                <p>Status:<br/><strong>{a.status}</strong></p>
                                            </HorizonWrapper>
                                        </RichText>
                                    </ContentContainer>
                                </BasicSectionWrapper>
                            </>
                        )
                    })}
            </WrapperCekResi>
            ) : (
            <>

            </>
            )}    
      </MainWrapper>
  );
}

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
  padding-top: 2rem;

  p {
    margin: 0;
  }

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
  height: 2rem;
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
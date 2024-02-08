/* eslint-disable import/order */
import { child, get, ref  } from 'firebase/database';
import { database } from '../../firebase.js';
import styled from 'styled-components';
import Logo from 'components/Logo';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [noResi, setNoResi] = useState("")
  const [BgVid, setBgVid] = useState("");

  useEffect(() => {
    const DB = ref(database);
    get(child(DB, `MainSection/Hero1`)).then(async(data) => {
      const BGVid = data.val().bgVid.url;
      setBgVid(BGVid);
    }).catch((err) => {
      console.log(err);
    })
  },[])

  const router = useRouter();
  const handleSearch = () => {
    if(noResi){
      router.push(`/tracking?query=${noResi}`);
    }else{
      alert('Nomor Resi Tidak Boleh Kosong')
    }
  };

  return (
        <VideoWrapper>
            <VidWrp>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <TextContent>
            <Text>WE SERVE BETTER IN LOGISTIC</Text>
          </TextContent>
          <CardInput>
            <InputWrapper>
              <Text2>Track Delivery?</Text2>
                <InputResi placeholder='Nomor Resi' onChange={(e) => setNoResi(e.target.value)}/><br />
                  <Button onClick={(e) => handleSearch()}>Search</Button>
            </InputWrapper>
          </CardInput>
              <VideoPlayer src={BgVid} autoPlay loop muted />
            </VidWrp>
        </VideoWrapper>
  );
}

const VidWrp = styled.div`
width: 100%;
max-height: 50rem;
position: relative;
display: flex;
overflow: hidden;
@media (max-width:1200px){
  height: 40rem;
}
`

const CardInput = styled.div`
position: absolute;
padding-top: 5rem;
text-align: center;
padding-bottom: 10rem;
opacity: 60%;
width: 35%;
top: 80%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 3;
transition: opacity 0.3;
@media (max-width:1200px){
  width: 50%;
}
@media (max-width:512px){
  width: 100%;

}
&:hover {
  opacity: 100%;
}
`

const InputWrapper = styled.div`
width: 80%;
left: 10%;
position: relative;
background: white;
height: 24rem;
box-shadow: 0px 8px 15px rgba(0,0,0,0.25);
border-radius: 40px;
padding-bottom: 0;
padding-top: 2rem;
@media (max-width:1200px){
  height: 20rem;
}
`;


const InputResi = styled.input`
  border: 0;
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0;
  height: 4rem;
  width: 60%;
  text-align: center;
  line-height: 24px;
  
  @media (max-width: 1200px){
    width: 40%;
    font-size: 2rem;
    line-height; 24px;
  }
  @media (max-width: 412px){
    width: 80%;
    font-size: 2rem;
    line-height; 24px;
  }

`;


const Text = styled.h1`
  font-size: 5rem;
  line-height: 40px;
  padding-bottom: 1.5rem;
  @media (max-width: 1200px) {
    font-size: 3rem; 
  }
`;

const Text2 = styled.h1`
  font-size: 3rem;
  line-height: 40px;
  padding-bottom: 2rem;
  @media (max-width: 1200px) {
    padding-top: -1rem;
    padding-bottom: 0.5rem;
    font-size: 2.5rem; 
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  margin-top: 3rem;
  background: rgb(12,124,3);
  padding: 2.25rem 3.25rem;
  font-size: 1.2rem;
  color: rgb(var(--textSecondary));
  text-transform: uppercase;
  font-family: var(--font);
  font-weight: bold;
  border-radius: 2rem;
  border: none;
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;
  cursor: pointer;
  
  @media (max-width: 1200px){
    margin-top: 1rem;

  }

  span {
    margin-left: 2rem;
  }

  &:hover {
    transform: scale(1.025);
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  dispaly: flex;
  overflow: hidden;
  margin-top: -80px;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 37.99%);
    opacity: 0.6;
    z-index: 2;
  }
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5);
  z-index: 1; /* Menempatkan video di bawah logo */
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* Menempatkan logo di atas video */
`;

const TextContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 3;
  text-align: center;
  max-width: 1200px;

  @media (max-width: 1200px) {
    padding: 0 20px;
  }
`;

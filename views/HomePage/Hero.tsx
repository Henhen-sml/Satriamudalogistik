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
  const LacakImg = "https://firebasestorage.googleapis.com/v0/b/satria-muda-logistic.appspot.com/o/mainBanner%2Fico-lacak.svg?alt=media&token=94384ada-5938-40e0-a76a-346520ccca6b";

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
      router.push(`/tracking?r=${noResi}`);
    }else{
      alert('Nomor Resi Tidak Boleh Kosong')
    }
  };

  return (
        <VideoWrapper>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <TextContent>
            <Text>WE SERVE BETTER IN LOGISTIC</Text>
          </TextContent>
            <VidWrp>
              <VideoPlayer src={BgVid} autoPlay loop muted />
            </VidWrp>
        </VideoWrapper>
  );
}

const VidWrp = styled.div`
width: 100%;
height: 100vh;
position: relative;
overflow: hidden;
`

const CardInput = styled.div`
bottom: 60px;
display: flex;
justify-content: center;
max-width: 80%;
background: rgba(255,255,255,0.8);
border-radius: 100px;
@media (max-width: 1200px){
  bottom: 48px;
  margin: 0 68px;
}
@media (max-width: 1023px){
  bottom: 48px;
  margin: 0 40px;
}
@media (max-width: 766px){
  flex-direction: column;
  bottom: 48px;
  margin: 0 24px;
  border-radius: 42px;
}
position: absolute;
left:0;
right:0;
margin: 0 auto;
z-index: 3;
overflow:hidden;
`


const Forms = styled.form`
display: flex;
align-items: center;
margin: 0;
`

const Tags = styled.span`
box-sizing: border-box;
line-height: 1;
flex-grow: 1;
    display: inline-block;
    min-width: 80px;
    margin: 0;
    padding: 8px 0;
    font-size: 16px;
    position: relative;
    white-space: pre-wrap;
    color: var(--input-color);
`;

const InputBox = styled.div`
width: calc(100% - 52px);
@media (max-width: 766px){
  font-size: 13px;
  line-height: 16px;
}
padding-left: 16px;
position: relative;
`

const InputWrapper = styled.div`
width: 100%;
position: relative;
background: white;
box-shadow: 0px 8px 15px rgba(0,0,0,0.25);
border-radius: 100px;
padding-bottom: 0;
`;

const ImgWrapper = styled.div`
width: 32px;
`

const ImgLoct = styled.img`
max-width: 100%;
overflow-clip-margin: content-box;
overflow: clip;
`

const InputResi = styled.input`
padding: 0 55px 0 0;
border: 0;
font-size: 1rem;
font-weight: 300;
margin: 0;
height: 24px;
line-height: 24px;
color: #999999;
@media (max-width: 1023px){
  font-size: 16px;
  line-height; 24px;
}
@media (max-width: 766px){
  font-weight: 400;
  font-size: 16px;
  line-height; 24px;
}
`;


const VideoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: flex;
  overflow: hidden;
  margin-top: -76px;

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

const Text = styled.h1`
  font-size: 5rem;
  line-height: 40px;

  @media (max-width: 1200px) {
    font-size: 2.5rem; 
  }
`;

const Text2 = styled.label`
  font-size: 0.875rem;
  color: #212121;
  font-weight: 600;
  display: block;
  margin: 0 0 4px;
  line-height: normal;
  @media (max-width: 1200px) {
    margin-top: -2%;
  }
`;

const Button = styled.a`
  border-color: #fff;
  border-radius: 16px;
  color: #fff;
  margin: 0;
  height: 52px;
  line-height: 50px;
  cursor: pointer;
  border: 2px solid #fff;
  font-size: 2rem;
  display: inline-block;
  font-weight: 700;
  letter-spacing: normal;
  padding: 0 32px;
  text-align: center;
  margin-top: 2rem;
  text-decoration: none;
  text-transform: none;
`
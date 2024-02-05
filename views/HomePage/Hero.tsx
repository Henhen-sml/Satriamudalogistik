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
          <Text>WE SERVE BETTER</Text>
          <Text>IN LOGISTIC</Text>
        </TextContent>
        <CardInput>
            <Text2>Track Delivery</Text2>
              <InputWrapper>
                  <InputResi placeholder='Masukan NoResi'/>
              </InputWrapper>
                <ImgWrapper>
                  <ImgLoct src={LacakImg}/>
                </ImgWrapper>
        </CardInput>
            <VideoPlayer src={BgVid} autoPlay loop muted />
      </VideoWrapper>
  );
}

const CardInput = styled.div`
position: relative;
top:75%;
width: 60%;
left: 20%;
right: 20%;
height: 10%;
z-index: 3;
background: white;
border-radius: 20px;
opacity: 70%;

@media (max-width: 765px) {
width: 90%;
left: 5%;
right: 5%;
}
`;

const InputWrapper = styled.div`
width: 100%;
left: 50%;
position: relative;
`;

const ImgWrapper = styled.div`
margin-top: -70px;
margin-left: 20px;
@media (max-width: 765px) {
  margin-top: -65px;
  margin-left: 10px;
  }
`

const ImgLoct = styled.img`
width: 70px;
@media (max-width: 765px) {
  width: 60px;
  }
`

const InputResi = styled.input`

`;


const VideoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: flex;
  overflow: hidden;
  margin-top: -100px;

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
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  color: white; /* Menentukan warna teks */
  z-index: 3; /* Menempatkan teks di atas video */
  text-align: center;
  max-width: 1200px;

  @media (max-width: 1200px) {
    padding: 0 20px; /* Menambah padding untuk teks ketika layar lebih kecil dari 1200px */
  }
`;

const Text = styled.h1`
  font-size: 5rem;
  line-height: 60px;

  @media (max-width: 1200px) {
    font-size: 2.5rem; /* Mengurangi ukuran font ketika layar lebih kecil dari 1200px */
  }
`;

const Text2 = styled.h1`
  font-size: 2.5rem;
  line-height: 60px;
  text-align: center;
  margin-top: -1%;
  @media (max-width: 1200px) {
    margin-top: -2%;
  }
`;

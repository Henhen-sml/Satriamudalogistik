import { child, get, ref  } from 'firebase/database';
import { database } from '../../firebase.js';
import styled from 'styled-components';
import Logo from 'components/Logo';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { el } from 'date-fns/locale';

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
      router.push(`/tracking?r=${noResi}`);
    }else{
      alert('Nomor Resi Tidak Boleh Kosong')
    }
  };

  return (
    <>
      <VideoWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <TextContent>
          <Text>FREIGHT FORWARDER</Text>
          <Text>Logistic & Transport</Text>
        </TextContent>
        <InputCard>
          <HeaderText>
            <HeaderTextTitle>Lacak Pengiriman</HeaderTextTitle>
          </HeaderText>
          <InputWrapper>
          <ImageWrapper>
            <Image src='https://firebasestorage.googleapis.com/v0/b/satria-muda-logistic.appspot.com/o/mainBanner%2Fico-lacak.svg?alt=media&token=94384ada-5938-40e0-a76a-346520ccca6b' alt="Search" />
          </ImageWrapper>
            <InputResi>
              <Input placeholder='Nomor Resi' onChange={(e) => setNoResi(e.target.value)}/>
            </InputResi>
            <SearchButton onClick={handleSearch}>
              CARI
            </SearchButton>
          </InputWrapper>
        </InputCard>
            <VideoPlayer src={BgVid} autoPlay loop muted />
      </VideoWrapper>
    </>
  );
}

const VideoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
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

const ImageWrapper = styled.div`
margin: 4px;
`

const Image = styled.img`
width : 70px;
`

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

const HeaderText = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black; /* Menentukan warna teks */
  z-index: 3;
  text-align: center;
  max-width: 1200px;
  margin-bottom: 5%;
`;

const HeaderTextTitle = styled.h3`
  font-size: 3rem;
  line-height: 40px;

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const InputCard = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* Menempatkan card di atas video */
  text-align: center;
  max-width: 70%;
  width: 90%;
  height: 8%;
  border-radius: 31px;
  overflow: hidden;
  opacity: 80%;
  background: white;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const InputResi = styled.div`
  color: white; /* Menentukan warna teks */
  width: 100%;
  padding-top: 8px;
`;

const Input = styled.input`
  border: 1px solid rgb(var(--inputBackground));
  background: white;
  text-align: center;
  border-radius: 0.6rem;
  width: 70%;
  height: 7rem;
  font-size: 1.6rem;
  padding: 1.8rem;
  box-shadow: var(--shadow-md);

  &:focus {
    outline: none;
    box-shadow: var(--shadow-lg);
  }
`;

const SearchButton = styled.button`
  width: 20%;
  height: 7rem;
  border-radius: 31px;
  cursor: pointer;
  border: none;
  margin: 1px;
  background: #007bff; /* Ganti warna latar belakang sesuai keinginan Anda */
  color: white;
  font-size: 1.6rem;

  &:hover {
    background: #0056b3; /* Ganti warna latar belakang saat tombol dihover sesuai keinginan Anda */
  }
`;

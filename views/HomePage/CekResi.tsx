/* eslint-disable import/order */
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CekResi() {
  const [noResi, setNoResi] = useState("");

  const router = useRouter();
  const handleSearch = () => {
    if(noResi){
      router.push(`/tracking?r=${noResi}`);
    }else{
      alert('Nomor Resi Tidak Boleh Kosong')
    }
  };

  return (
        <CardInput>
            <InputWrapper>
              <Text>Track Delivery?</Text>
                <InputResi placeholder='Masukan Nomor Resi' onChange={(e) => setNoResi(e.target.value)}/><br />
                  <Button onClick={(e) => handleSearch()}>Search</Button>
            </InputWrapper>
        </CardInput>
  );
}

const CardInput = styled.div`
padding-top: 5rem;
text-align: center;
padding-bottom: 6rem;
`

const InputWrapper = styled.div`
width: 80%;
left: 10%;
position: relative;
background: white;
height: 20rem;
box-shadow: 0px 8px 15px rgba(0,0,0,0.25);
border-radius: 40px;
padding-bottom: 0;
`;


const InputResi = styled.input`
border: 0;
font-size: 1rem;
font-weight: 300;
margin: 0;
height: 24px;
width: 50%;
text-align: center;
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

const Text = styled.h1`
  font-size: 5rem;
  line-height: 40px;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
  @media (max-width: 1200px) {
    font-size: 2.5rem; 
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  margin-top: 2rem;
  background: rgb(12,124,3);
  padding: 1.25rem 2.25rem;
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

  span {
    margin-left: 2rem;
  }

  &:hover {
    transform: scale(1.025);
  }
`;
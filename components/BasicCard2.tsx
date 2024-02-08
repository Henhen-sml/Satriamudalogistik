import styled from 'styled-components';

interface BasicCardProps {
  title: string;
  desc: string;
  url: string;
}

export default function BasicCard2({ title, desc, url }: BasicCardProps) {
  return (
    <Card>
      <Title>{title}</Title>
      <Images src={url} />
      <Description>
        <Text>
          {desc}
        </Text>
        </Description>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  background: rgb(var(--cardBackground));
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 45rem;
  height: 55rem;
  color: rgb(var(--text));
  font-size: 1.6rem;
  @media (max-width: 1024px) {
    width: 35rem;
    height: 45rem;
    
  }
  `;
  
  const Images = styled.img` 
  padding-top: 1rem;
  width: 300px;
  height: 400px;
  object-fit: contain;
  @media (max-width: 1024px) {
    height: 300px;
    width: 200px;
    
  }
  
`

const Title = styled.div`
  font-weight: bold;
  font-size: 2rem;
  padding-top: 0.6rem;
  max-width: 60%;
`;

const Description = styled.div`
  padding: 0.6rem;
`;

const Text = styled.p`
  
`
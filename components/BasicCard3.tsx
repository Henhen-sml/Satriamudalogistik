import styled from 'styled-components';

interface BasicCardProps {
  title: string;
  desc: string;
  url: string;
}

export default function BasicCard3({ title, desc, url }: BasicCardProps) {
  return (
    <Card>
      <Images src={url} />
        <ContentWrapper>
          <Title>{title}</Title>
            <Description>
              <Text>
                {desc}
              </Text>
            </Description>
        </ContentWrapper>
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
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
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
const ContentWrapper = styled.div`
position: relative;
text-align: center;
padding: 2rem;
`

const Title = styled.div`
font-weight: bold;
font-size: 1.5rem;
padding-top: 0.6rem;
max-width: 100%;
`;

const Description = styled.div`
  padding: 0.6rem;
`;

const Text = styled.p`
  
`
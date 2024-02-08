/* eslint-disable import/order */
import NextLink from 'next/link';
import styled from 'styled-components';
import { media } from 'utils/media';
import LogoDark from './LogoDark';
import Image from 'next/image';

type SingleFooterListItem = { title: string; href: string; logo: string; };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; logo: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Shortcuts',
    logo : 'https://firebasestorage.googleapis.com/v0/b/satria-muda-logistic.appspot.com/o/258144-200.png?alt=media&token=8817d5f3-ade3-4ac0-9321-c9219f4578cb',
    items: [
      { title: 'Main page', href: '/', logo: 'https://th.bing.com/th/id/R.498501dce36db8756eda925d856b5d70?rik=M18uhjH7szuE8w&riu=http%3a%2f%2ffreevector.co%2fwp-content%2fuploads%2f2009%2f01%2f12168-home-web-page1.png&ehk=tEFowFjnOvVMDuwWiKBysyhQ8MoLki%2bofqu1xZq8CCo%3d&risl=&pid=ImgRaw&r=0'},
      { title: 'Tracking', href: '/tracking', logo: 'https://th.bing.com/th/id/OIP.Tkl7GIVCM3M1-aooIfhBiwHaJ3?rs=1&pid=ImgDetMain' },
      { title: 'Our Profile', href: '/profile-perusahaan', logo: 'https://cdn3.iconfinder.com/data/icons/user-icon-3-1/100/user_3_Artboard_1-1024.png' },
      { title: 'Our Services', href: '/produk-dan-layanan', logo: 'https://solosoftservices.com/wp-content/uploads/2018/09/managed-services-icon_2.png' },
      { title: 'News', href: '/berita', logo: 'https://th.bing.com/th/id/R.38b171206d345d60a2bfcb18875af470?rik=JoVHqs1NojsGlA&riu=http%3a%2f%2fwww.cookcountylandbank.org%2fwp-content%2fuploads%2f2014%2f09%2fNews-Icon.jpg&ehk=UhL7SH07g5h8uCLwjrnNy9Zg7OynPQc2Kxv4tJeF6t4%3d&risl=&pid=ImgRaw&r=0' },
      { title: 'Contact Us', href: '/contact', logo: 'https://www.freeiconspng.com/uploads/customer-service-icon-png-9.png' },
    ],
  },
  {
    title: 'Our Service',
    logo : 'https://cdn4.iconfinder.com/data/icons/shipping-and-postage/128/15-1024.png',
    items: [
      { title: 'Sea Freight FCL/LCL', href: '/produk-dan-layanan', logo: 'https://cdn1.iconfinder.com/data/icons/logistic-delivery-16/64/cargo_ship_logistic_delivery_shipping_transport_ocean-1024.png' },
      { title: 'Trucking And Distribution', href: '/produk-dan-layanan', logo: 'https://cdn-icons-png.flaticon.com/512/1350/1350224.png' },
      { title: 'Project Cargo', href: '/produk-dan-layanan', logo: 'https://cdn-icons-png.flaticon.com/512/2463/2463759.png' },
      { title: 'Heavy Equipment', href: '/produk-dan-layanan', logo: 'https://cdn4.iconfinder.com/data/icons/strongicon-vol-17-2/24/construction-25-512.png' },
    ],
  },
  {
    title: 'Knowledge',
    logo : 'https://www.pngall.com/wp-content/uploads/10/Knowledge-Silhouette-PNG.png',
    items: [
      { title: 'Produk dan layanan', href: '/produk-dan-layanan', logo: 'https://solosoftservices.com/wp-content/uploads/2018/09/managed-services-icon_2.png' },
      { title: 'Tentang perusahaan', href: '/profile-perusahaan', logo: 'https://cdn3.iconfinder.com/data/icons/user-icon-3-1/100/user_3_Artboard_1-1024.png' },
      { title: 'Berita', href: '/berita', logo: 'https://th.bing.com/th/id/R.38b171206d345d60a2bfcb18875af470?rik=JoVHqs1NojsGlA&riu=http%3a%2f%2fwww.cookcountylandbank.org%2fwp-content%2fuploads%2f2014%2f09%2fNews-Icon.jpg&ehk=UhL7SH07g5h8uCLwjrnNy9Zg7OynPQc2Kxv4tJeF6t4%3d&risl=&pid=ImgRaw&r=0' },
      { title: 'Hubungi Kami', href: '/contact', logo: 'https://www.freeiconspng.com/uploads/customer-service-icon-png-9.png' },
    ],
  },
  {
    title: 'Find Us?',
    logo : 'https://th.bing.com/th/id/R.a8f7a3b50b2965cd69d0a79a53a7bd14?rik=%2f9ME2RwTj8ksiQ&riu=http%3a%2f%2fsimpleicon.com%2fwp-content%2fuploads%2ffind_person.png&ehk=kJ5kQCvag1bWfrelX9OGmR71xSygxn1bBbT3PoXqHac%3d&risl=&pid=ImgRaw&r=0',
    items: [
      { title: '@satriamudalogistik', href: 'https://www.instagram.com/satriamudalogistik/', logo: 'https://th.bing.com/th/id/OIP.-ZirgQE5pr8e7htQWowJIgHaHa?rs=1&pid=ImgDetMain' },
      { title: '62811 3333 823', href: 'https://wa.me/628113333823', logo: 'https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png' },
      { title: 'satriamudalogistik@gmail.com', href: 'mailto:satriamudalogistik@gmail.com', logo: 'https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png' },
      { title: 'cs@satriamudalogistik.com', href: 'mailto:cs@satriamudalogistik.com', logo: 'https://www.freeiconspng.com/uploads/customer-service-icon-png-9.png' },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          <TextContainer>
            <NextLink href='/'>
                <LogoDark />
            </NextLink>
            <TextWrapper> 
            We Serve Better in Logistic
            </TextWrapper>
          </TextContainer>
          {footerItems.map((singleItem, i) => (
            <FooterList key={i} {...singleItem} />
            ))}
        </ListContainer>
          <Copyright>&copy; Copyright 2022 PT SATRIA MUDA LOGISTIK</Copyright>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items, logo }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader><Image src={logo} alt={title} width={26} height={26}/>{title}</ListHeader>
      {items.map((singleItem, i) => (
        <ListItem key={i} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href, logo }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <Image src={logo} alt={title} width={26} height={26}/>
        {title}
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  max-width: 70%;
  position: relative;
  left: 15%;
  border-radius: 20px;
  padding-bottom: 4rem;
  color: rgb(var(--text));
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 1200px){
    max-width: 100%;
    left:0%;
  }
  @media (max-width: 512px){
    padding: 3rem;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 110em;
  width: 85%;
  margin: 0 auto;
  padding: 0 1rem;
  align-items:center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10rem;
  color: rgb(var(--text));
  justify-content: space-between;
  @media (max-width: 1200px){
    padding: 0;
  }
`;

const ListHeader = styled.div`
  font-weight: bold;
  font-size: 2.25rem;
  display: flex;
  margin-bottom: 2.5rem;
  text-align: center;
    img {
    margin-right: 1rem;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.div`
  font-size: 1.6rem;
  display: flex; /* Mengatur item secara horizontal */
  align-items: center; /* Menyusun item secara vertikal di tengah */
  
  a {
    text-decoration: none;
    color: rgba(var(--text), 0.75);
    display: flex; /* Mengatur item sebagai flex untuk mengelola posisi logo dan teks */
    align-items: center; /* Menyusun item secara vertikal di tengah */
  }

  img {
    margin-right: 0.5rem; /* Jarak antara logo dan teks */
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const TextContainer = styled.div`
text-align: center;
max-width: 12em;
margin-top: -40px;
margin-right: 4rem;
margin-left: -2rem;
@media (max-width: 1200px){
  margin-left: -4rem;
  margin-right: 7rem;
}
@media (max-width: 512px){
  margin-left: 7rem;
  margin-right: 7rem;
  margin-bottom: 6rem;
}
`

const TextWrapper = styled.h1`
margin-top: -10px;
`
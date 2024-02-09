/* eslint-disable import/order */
import React from 'react';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import NextLink from 'next/link';
import { EmailIcon, FacebookMessengerIcon, WhatsappIcon  } from 'react-share';
import BasicSection2 from 'components/BasicSection2';
import BeritaLogistik from 'views/HomePage/BeritaLogistik';

export default function Contact() {


  return (
    <>
    <BasicSection title="Contact Us">
        <p>
        Welcome to the seamless experience of ordering our premium products! 
        At Satria Muda Logistics, 
        weve crafted a user-friendly 
        platform to make the ordering process as 
        smooth as possible. Browse our extensive catalog, 
        add your favorite items to the cart, and proceed to checkout effortlessly. 
        Our secure payment gateway ensures the safety of your transactions,
        and our dedicated team is ready to process and dispatch your order promptly. 
        Expect nothing but excellence from the moment you place your order to the 
        delivery of our exceptional products to your doorstep. Thank you for choosing 
        Satria Muda Logistics, where quality meets convenience.
        </p><br/>
        <p>
        Your feedback is invaluable to us at Satria Muda Logistics 
        products and create something extraordinary. Thank you for being 
        an essential part of our journey.
        </p>
        <Wrapper>
          <ShareBar>
              <NextLink href="https://www.instagram.com/satriamudalogistik" passHref>
                  <FacebookMessengerIcon size={50} round={true} /> <p>@satriamudalogistic</p>
              </NextLink>
          </ShareBar>
          <ShareBar>
              <NextLink href="mailto:cs@satriamudalogistik.com" passHref>
                  <EmailIcon size={50} round={true} /> <p>cs@satriamudalogistik.com</p>
              </NextLink>
          </ShareBar>
          <ShareBar>
              <NextLink href="https://wa.me/628113333823" passHref>
                  <WhatsappIcon size={50} round={true} /><p>0811 3333 823</p>
              </NextLink>
          </ShareBar>
        </Wrapper>
    </BasicSection>
        <BasicSection2 title="LATEST ACTIVITY">
            <BeritaLogistik />
        </BasicSection2>
    </>
  );
}

const Wrapper = styled.div`
align-item: center;
text-align: center;
`;
const ShareBar = styled.div`
padding-top: 2rem;
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;
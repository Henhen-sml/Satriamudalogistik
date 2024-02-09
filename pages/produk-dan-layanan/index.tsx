/* eslint-disable import/order */
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import BasicSection2 from 'components/BasicSection2';
import BeritaLogistik from 'views/HomePage/BeritaLogistik';
import Partners from 'views/HomePage/Partners';

export default function ProdukLayanan() {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
    const Banner = "https://firebasestorage.googleapis.com/v0/b/satria-muda-logistic.appspot.com/o/long%20banner.png?alt=media&token=494216b8-998b-4450-8f89-dba858917fe3"
    const LogisticImg = "https://firebasestorage.googleapis.com/v0/b/satria-muda-logistic.appspot.com/o/ship.png?alt=media&token=f15bf57d-ef8d-4780-8387-c53f185f5499"
    const AirCraftImg = "https://cdn-icons-png.flaticon.com/512/2503/2503569.png"
    const TruckImg = "https://cdn-icons-png.flaticon.com/256/2/2259.png"
    const CustomClearImg = "https://firebasestorage.googleapis.com/v0/b/satria-muda-logistic.appspot.com/o/warehouse.png?alt=media&token=067e675b-bb07-4f47-b46f-eeacb34cf0ed"
    const ImportExportImg = "https://cdn4.iconfinder.com/data/icons/delivery-121/62/global-logistics-international-import-export-1024.png"
    const HeroSection:any = styled.div`
        animation: ${isAnimated ? fadeInUp : 'none'} 1.5s ease-in-out;
        margin: 1.5rem 0;
        `;
        
  useEffect(() => {
    setIsAnimated(true);
  }, [])

  return (
    <Wrapper>
        <Head>
        <title>Our Services | {EnvVars.SITE_NAME}</title>
          <meta
            name="description"
            content="Satria Muda Logistics | Tracking Your Goods ?"
          />
      </Head>
            <ImageBgWrapper src={Banner} />
        <BasicSection title="PRODUCTS AND SERVICES">
                    <HeroSection>
                    <p>
                    Project Cargo remains SMLs core business, with a primary
                    focus on industries related to Automotive, Oil and Gas, Energy,
                    Power Generation, Mining, Industrial Commodities, Metals and
                    Infrastructure projects.
                    </p>
                    </HeroSection>
            </BasicSection>
      <BasicSection title="LOGISTICS">
        <HeroSection>
                <ul>
                    <li>Sea Freight (LCL):
                      <br />
                    </li>
                      <p>Sea Freight Direct Consolidation, often abbreviated as LCL, 
                          refers to a shipping method where multiple smaller shipments 
                          from different consignees are consolidated or combined into a 
                          single container for transportation. In other words, LCL allows 
                          multiple shippers to share space in a container, making it a 
                          cost-effective option for those who do not have enough goods 
                          to fill an entire container. Once the container reaches its 
                          destination, the goods are deconsolidated and delivered to their 
                          respective recipients. LCL is suitable for smaller shipments, 
                          offering flexibility and cost savings compared to other shipping methods.
                        </p>
            <ImageFill src={LogisticImg} />
                    <li>Sea Freight (FCL):
                    </li>
                      <p>
                      Sea Freight Full Container Load (FCL) 
                      involves the transportation of goods 
                      in a container that is fully loaded and 
                      sealed by a single shipper. Unlike LCL, 
                      where multiple shipments are combined into 
                      one container, FCL shipments utilize an entire 
                      container for the goods of a single shipper. This 
                      method is preferred for larger shipments or when the 
                      shipper wants to ensure that their goods are not mixed 
                      with those of other shippers. FCL offers greater security 
                      and control over the shipment since the container is sealed 
                      until it reaches its final destination. While FCL may be more 
                      expensive compared to LCL for smaller shipments, it provides exclusive use 
                      of the container and reduces the risk of damage or loss during transit.
                      </p>
            <ImageFill2 src={AirCraftImg} />
                    <li>Air Freight.
                    </li>
                      <p>
                      Air Freight is a method of transporting goods via aircraft, 
                      commonly used for shipping cargo across domestic and international 
                      destinations. It is a fast and efficient mode of transportation that
                       offers numerous advantages for businesses and individuals alike.
                       <ul>
                          <li>Speed</li>
                          <li>Reliability</li>
                          <li>Global Reach</li>
                          <li>Security</li>
                          <li>Flexibility</li>
                          <li>Cost</li>
                       </ul>
                      </p>
            <ImageFill3 src={TruckImg} />
                    <li>Trucking and Distribution
                    </li>
                      <p>                   
                          Trucking and Distribution is a crucial aspect of the 
                          logistics industry that involves the transportation and 
                          delivery of goods via trucks to various destinations, 
                          including warehouses, distribution centers, retailers, 
                          and end customers. This mode of transportation plays a 
                          vital role in the supply chain, facilitating the movement 
                          of goods from manufacturers to consumers efficiently and reliably.
                          <ul>
                            <li>Transportation Network</li>
                            <li>Last-Mile Delivery</li>
                            <li>Flexibility and Accessibility</li>
                            <li>Timeliness and Reliability</li>
                            <li>Specialized Services</li>
                            <li>Technology Integration</li>
                          </ul>
                      </p>
                </ul>
        </HeroSection>
      </BasicSection>
      <BasicSection title="CUSTOM CLEARANCE">
        <HeroSection>
                <ul>
                      <Container>
                          <Images src={CustomClearImg} width={1} height={1} alt='Warehouse'/>
                    <li>Warehouse and Storage
                      <p>Warehouse and Storage refers to facilities 
                        or spaces specifically designed for the temporary
                         storage of goods and merchandise. These facilities 
                         play a crucial role in the supply chain by providing 
                         a secure and organized environment for inventory management.
                          Warehouses typically feature storage racks, shelves, and 
                          pallets to maximize space utilization and facilitate efficient 
                          handling of goods. They may also offer additional services such 
                          as inventory tracking, order fulfillment, and cross-docking to 
                          meet the diverse needs of businesses. Warehouse and Storage services 
                          are essential for businesses looking to optimize their inventory management, 
                          streamline logistics operations, and meet customer demand by ensuring 
                          timely delivery of goods.</p>
                    </li>
                      </Container>
                      <Container>
                      <Images src={ImportExportImg} width={1} height={1} alt='Export-Import'/>
                    <li>Export & Import Services
                      <p>Export & Import Services encompass a range 
                        of activities involved in facilitating the international
                        trade of goods and commodities between countries. These 
                        services include coordinating the shipment of goods from 
                        the seller&apos;s location (export) to the buyer&apos;s destination (import), 
                        navigating customs regulations and documentation requirements, arranging 
                        transportation, and managing logistics processes to ensure the smooth 
                        flow of goods across borders. Export services involve packaging, labeling, 
                        and preparing goods for shipment overseas, while import services focus on
                         clearing customs, paying duties and taxes, and arranging for the delivery 
                         of imported goods to their final destination. Export & Import Services are
                         vital for businesses engaged in global trade, enabling them to expand their
                          market reach, access new opportunities, and capitalize on international markets.</p>
                    </li>
                      </Container>
                    <li>Custom Brokerage
                      <p>Custom Brokerage involves the facilitation of customs clearance and compliance 
                        procedures for imported and exported goods. Custom brokers act as intermediaries
                         between importers/exporters and customs authorities, helping navigate complex 
                         customs regulations, tariffs, and documentation requirements to ensure timely 
                         clearance of goods at ports of entry or exit. Custom brokerage services include 
                         preparing and submitting customs declarations, assessing duties and taxes, obtaining 
                         permits and licenses, and resolving issues related to customs inspections or compliance 
                         audits. Custom brokers leverage their expertise and knowledge of international trade 
                         regulations to streamline the customs clearance process, minimize delays, and mitigate 
                         risks associated with importing and exporting goods. Custom Brokerage services are essential 
                         for businesses engaged in cross-border trade, ensuring compliance with customs regulations 
                         and facilitating the efficient movement of goods across international borders.</p>
                    </li>
                </ul>
        </HeroSection>
      </BasicSection>
      <BasicSection title="SPECIAL HANDLING & MOVEMENT">
        <HeroSection>
                <ul>
                  <Container>
                    <Images src={'https://static.vecteezy.com/system/resources/previews/001/834/776/non_2x/delivery-man-with-mask-and-box-on-smartphone-with-client-design-free-vector.jpg'} width={1} height={1} alt='Door-to-Door' />
                    <li>Door to door delivery services
                        <p>
                        Door to Door Delivery Services refer to logistics solutions where goods are 
                        picked up from the sender&apos;s location and delivered directly to the recipient&apos;s 
                        doorstep. This service streamlines the shipping process by handling all aspects
                         of transportation, including packaging, documentation, customs clearance (if applicable), 
                         and final delivery. Door to Door Delivery Services offer convenience and efficiency
                          for both senders and recipients, as they eliminate the need for multiple intermediaries 
                          and simplify the logistics chain.
                        </p>
                    </li>
                  </Container>
                  <Container>
                    <Images src={'https://www.royalcargo.com/wp-content/uploads/2018/09/Containers-01-300x300.png'} width={1} height={1} alt='Container' />
                    <li>Project Cargo
                      <p>
                      Project Cargo pertains to the transportation of oversized, heavy, or specialized 
                      goods that require careful handling and specialized equipment during transit. This
                       may include large machinery, industrial equipment, construction materials, or components 
                       for infrastructure projects. Project Cargo logistics involve meticulous planning, coordination, 
                       and execution to ensure the safe and efficient transport of goods from origin to destination. 
                       Specialized carriers and equipment may be required to accommodate the unique dimensions and 
                       weight of project cargo, making it a specialized niche within the logistics industry.
                      </p>
                    </li>
                  </Container>
                  <Container>
                    <Images src={'https://www.freeiconspng.com/uploads/excavator-icon-png-16.png'} width={1} height={1} alt='Excavator' />
                    <li>Heavy Equipment
                      <p>
                      Heavy Equipment refers to large machinery, vehicles, or equipment used in construction,
                       mining, agriculture, and other industries. Examples include excavators, bulldozers, cranes,
                        tractors, and forklifts. Transporting heavy equipment requires specialized logistics 
                        solutions due to the size, weight, and fragility of the machinery involved. Heavy equipment
                         logistics may involve the use of flatbed trucks, low loaders, or specialized trailers equipped
                          with hydraulic systems for loading and unloading. Proper handling, securing, and 
                          transportation planning are essential to ensure the safe and efficient delivery of 
                          heavy equipment to its destination.
                      </p>
                    </li>
                  </Container>
                </ul>
        </HeroSection>
      </BasicSection>
          <Partners />

        <BasicSection2 title="Our Latest Activity">
            <BeritaLogistik />
        </BasicSection2>
    </Wrapper>
  )
}

const Images = styled(Image)`
width: 256px;
height: 256px;
order: 1;
@media (max-width: 512px){
  width: 120px;
  height: 120px;
  order: 1;
}
`;

const Container = styled.div`
display: flex;
align-items: center;
gap: 2px;
`;

const ImageBgWrapper = styled.img`
width: 100%;
height: auto;
display: absolute;
padding: 0;
transform: translate(0%, -20%);
`;

const waveAnimation = keyframes`
  0% {
    transform: translateX(120%) translateY(0);
  }
  50% {
    transform: translateX(70%) translateY(-20%);
  }
  100% {
    transform: translateX(-170%) translateY(20%);
  }
`;
const waveAnimationPlane = keyframes`
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(250%);
  }
`;


const ImageFill = styled.img`
width: 45%;
display: flex;
max-width: 25rem;
padding: 0;
z-index: -1;
overflow: hidden;
animation: ${waveAnimation} 20s linear infinite;
`

const ImageFill2 = styled.img`
width: 19%;
display: flex;
max-width: 25rem;
padding: 0;
z-index: -1;
overflow: hidden;
animation: ${waveAnimationPlane} 8s linear infinite;
`

const ImageFill3 = styled.img`
width: 25%;
display: flex;
max-width: 25rem;
padding: 0;
z-index: -1;
overflow: hidden;
animation: ${waveAnimation} 8s linear infinite;
`

const Wrapper = styled.div`

`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;



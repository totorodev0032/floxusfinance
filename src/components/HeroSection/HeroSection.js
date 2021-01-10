import React from 'react';
import styled from '@emotion/styled';
import Layout from '../Layout';
import SubscribeInput from '../SubscribeInput/SubscribeInput';

const Herosection = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  background-color: #2026d2;
  margin: 0;
  padding: 0;
  justify-content: center;
`;

const HeroContent = styled.div`
  display: flex;
  height: 400px;
  width: 70%;
`;

const LeftHero = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  flex-basis: 50%;
  justify-content: center;
`;
const RightHero = styled.div`
  display: flex;
  height: 400px;
  flex-basis: 50%;
`;

const Heading = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  font-weight: 700;
  font-size: 30px;
`;

const HeroSection = () => {
  return (
    <>
      <Layout>
        <Herosection>
          <HeroContent>
            <LeftHero>
              <Heading>
                Join us on our mission — to help people around the world to be
                financially empowered.
              </Heading>
              <SubscribeInput />
            </LeftHero>
            <RightHero></RightHero>
          </HeroContent>
        </Herosection>
      </Layout>
    </>
  );
};

export default HeroSection;

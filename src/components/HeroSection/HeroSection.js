import React from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '../Layout';
import SubscribeInput from '../SubscribeInput/SubscribeInput';

const Herosection = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  background-color: #2026d2;
  ${'' /* background-color: #26D7AB; */}
  margin: 0;
  padding: 0;
  justify-content: center;
`;

const HeroContent = styled.div`
  display: flex;
  height: 400px;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

const LeftHero = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  flex-basis: 60%;
  justify-content: center;
  align-items: center;
  @media (max-width: 496px) {
    flex-basis: 100%;
  }
`;

const Heading = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  ${'' /* color:#2A2552; */}
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  @media (max-width: 496px) {
    font-size: 20px;
  }
`;

const HeroSection = () => {
  return (
    <>
      <Layout>
        <Herosection>
          <HeroContent>
            <LeftHero>
              <Heading>
                Join us on our mission to help people around the world to be
                financially empowered.
              </Heading>
              <SubscribeInput />
            </LeftHero>
          </HeroContent>
        </Herosection>
      </Layout>
    </>
  );
};

export default HeroSection;

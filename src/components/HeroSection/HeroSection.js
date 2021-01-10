import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '../Layout';

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
  /* background-color: green; */
`;
const RightHero = styled.div`
  display: flex;
  height: 400px;
  flex-basis: 50%;
  /* background-color: red; */
`;

const Heading = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  font-weight: 700;
  font-size: 30px;
`;
const InputContainer = styled.div`
  display: flex;
  height: 40px;
  width: 70%;
  background-color: white;
  border-radius: 5px;
  align-items: center;
  justify-content: space-around;
`;

const Input = styled.input`
  width: 70%;
  height: 80%;
  border: none;
  margin-left: 3px;

  :hover {
    outline: none;
  }

  ::placeholder {
    font-size: 17px;
    color: gray;
  }
`;

const Button = styled.button`
  display: flex;
  width: 20%;
  height: 90%;
  background-color: #f1295c;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 900;
  font-size: 25px;
  border: none;
  border-radius: 2px;
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
              <InputContainer>
                <Input placeholder="Subscribe to our blog" />
                <Button> &rarr; </Button>
              </InputContainer>
            </LeftHero>
            <RightHero></RightHero>
          </HeroContent>
        </Herosection>
      </Layout>
    </>
  );
};

export default HeroSection;

import React from 'react';
import styled from '@emotion/styled';
import Layout from '../Layout';

const Herosection = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  background-color: #2026d2;
  margin: 0;
  padding: 0;
`;

const HeroSection = () => {
  return (
    <>
      <Layout>
        <Herosection> hello world </Herosection>
      </Layout>
    </>
  );
};

export default HeroSection;

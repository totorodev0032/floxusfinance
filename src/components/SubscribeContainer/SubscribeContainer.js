import React from 'react';
import styled from '@emotion/styled';
import SubscribeInput from '../SubscribeInput/SubscribeInput';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Heading = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: black;
  ${'' /* color:#2A2552; */}
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  @media (max-width: 496px) {
    font-size: 20px;
  }
`;

const SubscribeContainer = () => {
  return (
    <>
      <Wrapper id="subscribe">
        <Heading>Subscribe to our blog.</Heading>
        <SubscribeInput />
        <Heading>Logo</Heading>
      </Wrapper>
    </>
  );
};

export default SubscribeContainer;

import React from 'react';
import styled from '@emotion/styled';
import SubscribeInput from '../SubscribeInput/SubscribeInput';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const SubscribeContainer = () => {
  return (
    <>
      <Wrapper>
        <SubscribeInput />
      </Wrapper>
    </>
  );
};

export default SubscribeContainer;

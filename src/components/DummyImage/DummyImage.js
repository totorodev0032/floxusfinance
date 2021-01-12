import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  background-color: #eeeeee;
`;

const DummyImage = () => {
  return (
    <>
      <Container></Container>
    </>
  );
};

export default DummyImage;

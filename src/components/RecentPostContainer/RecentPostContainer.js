import React from 'react';
import styled from '@emotion/styled';
import RecentPost from '../RecentPost/RecentPost';
import Layout from '../Layout';

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const RecentPostContainer = () => {
  return (
    <Container>
      <RecentPost />
    </Container>
  );
};

export default RecentPostContainer;

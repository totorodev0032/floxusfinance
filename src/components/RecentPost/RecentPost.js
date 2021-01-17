import React from 'react';
import styled from '@emotion/styled';

const PostWrap = styled.div`
  display: flex;
  width: 40%;
  height: 130px;
  background-color: white;
  border-radius: 4px;
  margin-top: 20px;
  padding-bottom: 10px;

  @media (max-width: 496px) {
    width: 50%;
  }
`;

const RecentPost = () => {
  return (
    <>
      <PostWrap />
    </>
  );
};

export default RecentPost;

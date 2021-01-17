import React from 'react';
import styled from '@emotion/styled';

const PostWrap = styled.div`
  display: flex;
  width: 40%;
  height: 130px;
  background-color: white;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 50px 80px rgba(0, 0, 0, 0.07);

  @media (max-width: 496px) {
    width: 90%;
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

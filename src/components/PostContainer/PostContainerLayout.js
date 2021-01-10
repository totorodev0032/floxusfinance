import React from 'react';
import styled from '@emotion/styled';
import PostCard from '../PostCard/PostCard';

const PostWrapperLayout = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  background-color: #f6f7fa;
`;

const PostContainer = styled.div`
  display: flex;
  width: 70%;
  height: auto;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: space-between;

  @media (max-width: 496px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const PostContainerLayout = () => {
  return (
    <>
      <PostWrapperLayout>
        <PostContainer>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostContainer>
      </PostWrapperLayout>
    </>
  );
};

export default PostContainerLayout;

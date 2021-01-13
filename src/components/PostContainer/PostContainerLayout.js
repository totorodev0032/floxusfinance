import React from 'react';
import styled from '@emotion/styled';
import PostCard from '../PostCard/PostCard';
import usePosts from '../../hooks/use-post.js';

const PostWrapperLayout = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  background-color: white;
`;

const PostContainer = styled.div`
  display: flex;
  width: 70%;
  height: auto;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: space-between;
  padding-bottom: 20px;
  @media (max-width: 496px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const PostContainerLayout = () => {
  const posts = usePosts();
  console.log(posts);
  return (
    <>
      <PostWrapperLayout>
        <PostContainer>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </PostContainer>
      </PostWrapperLayout>
    </>
  );
};

export default PostContainerLayout;

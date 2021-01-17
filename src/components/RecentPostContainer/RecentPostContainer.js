import React from 'react';
import styled from '@emotion/styled';
import RecentPost from '../RecentPost/RecentPost';
import Layout from '../Layout';
import usePosts from '../../hooks/use-post';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const RecentPostContainer = () => {
  const posts = usePosts();
  return (
    <Container>
      {posts.map((post) => (
        <RecentPost key={post.slug} post={post} />
      ))}
    </Container>
  );
};

export default RecentPostContainer;

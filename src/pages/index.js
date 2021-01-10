import * as React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import PostCard from '../components/PostCard/PostCard';
import PostContainerLayout from '../components/PostContainer/PostContainerLayout';

const IndexPage = () => {
  return (
    <>
      <HeroSection />
      <PostContainerLayout />
    </>
  );
};

export default IndexPage;

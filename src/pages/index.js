import * as React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar/Navbar';
import PostCard from '../components/PostCard/PostCard';
import PostContainerLayout from '../components/PostContainer/PostContainerLayout';
import SubscribeContainer from '../components/SubscribeContainer/SubscribeContainer';

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PostContainerLayout />
      <SubscribeContainer id="subscribe" />
    </>
  );
};

export default IndexPage;

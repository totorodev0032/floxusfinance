import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
  height: 400px;
  background-color: #f4f8fc;
  margin-bottom: 20px;

  @media (max-width: 496px) {
    width: 90%;
  }
`;

const PostUp = styled.div`
  display: flex;
  flex-basis: 38%;
  background-color: #e0f7fa;
  width: 100%;
`;

const PostDown = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 42%;
  width: 100%;
`;

const PostFooter = styled.div`
  display: flex;
  flex-basis: 20%;
  width: 100%;
`;

const PostTitle = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #193259;
  margin: 0;
  padding: 20px 10px 10px 20px;
  letter-spacing: 1px;
`;

const PostExcerpt = styled.p`
  font-family: Open Sans;
  font-size: 13px;
  font-weight: 400;
  padding: 0 20px 0 20px;
  letter-spacing: 0.5px;
  color: #193259;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  height: auto;
  width: auto;
`;

const ButtonRead = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0ecc70;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 90%;
  height: 40px;
  border: none;
  margin-left: 10px;
  margin-top: 20px;
  font-weight: 700;
  font-size: 17px;
  border-radius: 3px;
  cursor: pointer;
  padding-bottom: 5px;
  text-decoration: none;
  &:focus {
    outline: none;
  }
`;

const ButtonKnow = styled(Link)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #1e8aff;
  text-decoration: none;
  padding-left: 19px;
`;

const PostCard = ({ post }) => {
  return (
    <>
      <PostWrapper>
        <PostUp></PostUp>
        <PostDown>
          <PostTitle>{post.title}</PostTitle>
          <PostExcerpt>{post.excerpt}</PostExcerpt>
        </PostDown>
        <PostFooter>
          {/* <NavLink to={post.slug}> */}
          <ButtonKnow to={post.slug}>Read More &rarr;</ButtonKnow>
          {/* </NavLink> */}
        </PostFooter>
      </PostWrapper>
    </>
  );
};

export default PostCard;

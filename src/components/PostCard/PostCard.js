import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
  height: 400px;
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 8px #eaeaea, -5px -5px 8px #ffffff;

  @media (max-width: 496px) {
    width: 90%;
  }
`;

const PostUp = styled.div`
  display: flex;
  flex-basis: 38%;
  background-color: #e0f7fa;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
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
  ${
    '' /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  }
  font-family: 'Fira Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #193259;
  margin: 0;
  padding: 20px 10px 10px 20px;
  letter-spacing: 1px;
`;

const PostExcerpt = styled.p`
  font-family: 'Fira Sans', sans-serif;
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
  width: 100px;
  margin-left: 20px;
  color: #1e8aff;
  font-family: 'Fira Sans', sans-serif;
  font-size: 15px;

  &:focus {
    backgroun-color: none;
  }
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
        {/* <PostFooter> */}
        {/* <NavLink to={post.slug}> */}
        <NavLink to={post.slug}>Read More &rarr;</NavLink>
        {/* </NavLink> */}
        {/* </PostFooter> */}
      </PostWrapper>
    </>
  );
};

export default PostCard;

import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const PostWrap = styled.div`
  display: flex;
  width: 40%;
  height: 150px;
  background-color: white;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 50px 80px rgba(0, 0, 0, 0.07);

  @media (max-width: 496px) {
    width: 90%;
    height: 190px;
  }
`;

const PostContentWrap = styled.div`
  display: flex;
  width: 95%;
  height: 85%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-basis: 30%;
  height: 100%;
  background-color: #eeeeee;
  border-radius: 4px;
`;

const PostDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  flex-basis: 70%;
  height: 100%;
  justify-content: center;
  ${'' /* align-items: center; */}
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

const RecentPost = ({ post }) => {
  return (
    <>
      <PostWrap>
        <PostContentWrap>
          <ImageContainer></ImageContainer>
          <PostDescription>
            <p
              css={css`
                margin: 0;
                font-family: 'Fira Sans', sans-serif;
                font-weight: 700;
                font-size: 18px;
                padding-top: 5px;
              `}
            >
              {post.title}
            </p>
            <p
              css={css`
                font-family: 'Fira Sans', sans-serif;
                font-weight: 300;
                font-size: 13px;
                margin-bottom: 0;
              `}
            >
              {post.excerpt}
            </p>
            <Link
              to={`/${post.slug}`}
              css={css`
                text-decoration: none;
                color: #1e8aff;
                font-family: 'Fira Sans', sans-serif;
                padding-top: 10px;
                font-size: 13px;
              `}
            >
              Read More
            </Link>
          </PostDescription>
        </PostContentWrap>
      </PostWrap>
    </>
  );
};

export default RecentPost;

import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

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
              to={post.slug}
              css={css`
                text-decoration: none;
                color: #1e8aff;
                margin-top: 0;
              `}
            >
              <p>Read More</p>
            </Link>
          </PostDescription>
        </PostContentWrap>
      </PostWrap>
    </>
  );
};

export default RecentPost;

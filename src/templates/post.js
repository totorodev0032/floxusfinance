import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import SubscribeContainer from '../components/SubscribeContainer/SubscribeContainer';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const PostArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-top: 10%;

  @media (max-width: 496px) {
    width: 90%;
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <PostAreaContainer>
      <PostArea>
        <h1
          css={css`
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            font-weight: 600;
            font-size: 30px;
            text-align: center;
          `}
        >
          {post.frontmatter.title}
        </h1>
        <p
          css={css`
            font-size: 0.75rem;
          `}
        >
          Posted by {post.frontmatter.author}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Link to="/">&larr; back to all posts</Link>
      </PostArea>
      <SubscribeContainer />
    </PostAreaContainer>
  </Layout>
);

export default PostTemplate;

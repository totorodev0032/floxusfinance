import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import { Link } from 'gatsby';

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
  width: 100%;
  height: auto;
  justify-content: center;
`;

const PostArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <PostAreaContainer>
      <PostArea>
        <h1>{post.frontmatter.title}</h1>
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
    </PostAreaContainer>
  </Layout>
);

export default PostTemplate;

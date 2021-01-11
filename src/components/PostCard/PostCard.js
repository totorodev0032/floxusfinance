import React from 'react';
import styled from '@emotion/styled';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 317px;
  height: 470px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.017),
    0 6.7px 5.3px rgba(0, 0, 0, 0.024), 0 12.5px 10px rgba(0, 0, 0, 0.03),
    0 22.3px 17.9px rgba(0, 0, 0, 0.036), 0 41.8px 33.4px rgba(0, 0, 0, 0.043),
    0 100px 80px rgba(0, 0, 0, 0.06);

  @media (max-width: 496px) {
    width: 90%;
  }
`;

const PostUp = styled.div`
  display: flex;
  flex-basis: 38%;
  background-color: #eeeeee;
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const PostDown = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 47%;
  width: 100%;
`;

const PostFooter = styled.div`
  display: flex;
  flex-basis: 15%;
  width: 100%;
`;

const PostTitle = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #212121;
  margin: 0;
  padding: 20px 10px 10px 20px;
`;

const PostExcerpt = styled.p`
  font-family: Open Sans;
  font-size: 13px;
  font-weight: 400;
  padding: 0 20px 0 20px;
`;

const ButtonRead = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1295c;
  color: white;
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
  &:focus {
    outline: none;
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
        <PostFooter>
          <ButtonRead>Read More &rarr;</ButtonRead>
        </PostFooter>
      </PostWrapper>
    </>
  );
};

export default PostCard;

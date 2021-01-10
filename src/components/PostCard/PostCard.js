import React from 'react';
import styled from '@emotion/styled';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 350px;
  background-color: #ffffff;
  border-radius: 3px;
  margin-bottom: 20px;
  box-shadow: 0 9.5px 5.3px rgba(0, 0, 0, 0.008),
    0 31.9px 17.9px rgba(0, 0, 0, 0.012), 0 143px 80px rgba(0, 0, 0, 0.02);
`;

const PostUp = styled.div`
  display: flex;
  flex-basis: 50%;
  background-color: #2026d2;
  width: 100%;
`;

const PostDown = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  width: 100%;
`;

const PostTitle = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: #212121;
  margin: 0;
  padding: 15px 10px 10px 10px;
`;

const PostExcerpt = styled.p`
  font-family: Open Sans;
  font-size: 13px;
  font-weight: 500;
  padding: 0 10px 0 10px;
`;

const ButtonRead = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2026d2;
  color: white;
  width: 90%;
  height: 40px;
  border: none;
  margin-left: 10px;
  margin-top: 10px;
  font-weight: 700;
  font-size: 17px;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;

const PostWrapperLayout = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  background-color: #f6f7fa;
`;

const PostContainer = styled.div`
  display: flex;
  width: 70%;
  height: auto;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: space-between;
`;

const PostCard = () => {
  return (
    <>
      <PostWrapper>
        <PostUp></PostUp>
        <PostDown>
          <PostTitle> How to save for travel? </PostTitle>
          <PostExcerpt>
            Now you have a monthly investment figure ready, all you need to do
            is start investing.
          </PostExcerpt>
          <ButtonRead>Read More &rarr;</ButtonRead>
        </PostDown>
      </PostWrapper>
    </>
  );
};

export default PostCard;

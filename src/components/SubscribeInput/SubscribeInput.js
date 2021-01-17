import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const InputContainer = styled.div`
  display: flex;
  height: 50px;
  width: 40%;
  background-color: white;
  border: 3px solid #e9e3fe;
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 496px) {
    width: 90%;
  }
`;

const Input = styled.input`
  width: 80%;
  height: 100%;
  border: none;
  margin-left: 3px;
  margin-top: 4px;
  background-color: white;
  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 15px;
    color: gray;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Button = styled.button`
  display: flex;
  width: 22%;
  height: 90%;
  background-color: #0ecc70;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 900;
  font-size: 25px;
  border: none;
  border-radius: 7px;
  margin-left: auto;
  margin-right: 5px;
  margin-top: 2px;

  &:hover {
    cursor: pointer;
  }
`;

const SymbolNext = styled.p`
  padding-bottom: 5px;
`;

const SubscribeInput = () => {
  return (
    <>
      <InputContainer>
        <form
          css={css`
            display: flex;
            width: 100%;
            height: 100%;
          `}
        >
          <label
            css={css`
              display: flex;
              width: 70%;
              height: 80%;
              margin-left: 5px;
            `}
          >
            <Input placeholder="Subscribe to our blog" />
          </label>
          <Button>
            <SymbolNext>&rarr;</SymbolNext>
          </Button>
        </form>
      </InputContainer>
    </>
  );
};

export default SubscribeInput;

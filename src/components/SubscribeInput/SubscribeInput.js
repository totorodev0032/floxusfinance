import React from 'react';
import styled from '@emotion/styled';

const InputContainer = styled.div`
  display: flex;
  height: 40px;
  width: 70%;
  background-color: white;
  border-radius: 5px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 496px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 70%;
  height: 80%;
  border: none;
  margin-left: 3px;

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
  width: 20%;
  height: 90%;
  background-color: #f1295c;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 900;
  font-size: 25px;
  border: none;
  border-radius: 2px;

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
        <Input placeholder="Subscribe to our blog" />
        <Button>
          {' '}
          <SymbolNext>&rarr;</SymbolNext>{' '}
        </Button>
      </InputContainer>
    </>
  );
};

export default SubscribeInput;

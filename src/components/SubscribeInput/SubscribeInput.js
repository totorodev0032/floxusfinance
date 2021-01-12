import React from 'react';
import styled from '@emotion/styled';

const InputContainer = styled.div`
  display: flex;
  height: 50px;
  width: 40%;
  background-color: #f3f2fa;
  border: 3px solid #e9e3fe;
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 496px) {
    width: 90%;
  }
`;

const Input = styled.input`
  width: 70%;
  height: 80%;
  border: none;
  margin-left: 3px;
  background-color: #f3f2fa;
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
  background-color: #f1295c;
  ${'' /* background-color: #5367FF; */}
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 900;
  font-size: 25px;
  border: none;
  border-radius: 7px;

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
          <SymbolNext>&rarr;</SymbolNext>
        </Button>
      </InputContainer>
    </>
  );
};

export default SubscribeInput;

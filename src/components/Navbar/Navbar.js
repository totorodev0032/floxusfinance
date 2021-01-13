import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Layout from '../Layout';
import { Link } from 'gatsby';

const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  ${'' /* background-color: #2026d2; */}
  background-color:white;
  height: 70px;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  width: 70%;
  height: 50px;
  align-items: center;
`;

const NavLeft = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  align-items: center;
`;

const NavRight = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  align-items: center;
`;

const BtnLink = styled(Link)`
  display: flex;
  width: 120px;
  height: 40px;
  ${'' /* background-color: #f1295c; */}
  background-color:#46B86E;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 7px;
  cursor: pointer;
  margin-left: auto;
`;

const Navbar = () => {
  return (
    <>
      <Layout>
        <NavWrapper>
          <Nav>
            <NavLeft>
              <h1
                css={css`
                  color: #193259;
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                    'Helvetica Neue', sans-serif;
                `}
              >
                Logo
              </h1>
            </NavLeft>
            <NavRight>
              <BtnLink to="/#subscribe">
                <p
                  css={css`
                    color: white;
                    font-weight: 700;
                    font-size: 15px;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                      'Helvetica Neue', sans-serif;
                    letter-spacing: 0.2;
                  `}
                >
                  Subscribe
                </p>
              </BtnLink>
            </NavRight>
          </Nav>
        </NavWrapper>
      </Layout>
    </>
  );
};

export default Navbar;

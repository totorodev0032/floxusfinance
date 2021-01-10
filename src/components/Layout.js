import React from 'react';
import { Global } from '@emotion/react';

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0,
          },
        }}
      />
      <main> {children} </main>
    </>
  );
};

export default Layout;

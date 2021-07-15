import React from 'react';
import { Global } from '@emotion/react';
import './app.css';
import Helmet from 'react-helmet';
import UseSiteMetadata from '../hooks/useSiteMetaData';

const Layout = ({ children }) => {
  const { title, description } = UseSiteMetadata();
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
      <Helmet>
        <html lang="en" />
        <title> {title} </title>
        <meta name="description" content={description} />
      </Helmet>
      <main> {children} </main>
    </>
  );
};

export default Layout;

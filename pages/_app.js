import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import {ToastyProvider} from '../src/contexts/Toasty'
import { Provider } from 'next-auth/client'

export default function MyApp(props) {
  const { Component, pageProps } = props;
  //console.log(theme)

  return (
    <React.Fragment>
      <Head>
        <title>Anunx</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Provider session={pageProps.session}>
        <ThemeProvider theme={theme}>    
          <ToastyProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </ToastyProvider>
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
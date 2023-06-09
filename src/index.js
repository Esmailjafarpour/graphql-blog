import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient , ApolloProvider , InMemoryCache } from "@apollo/client";
import {BrowserRouter} from "react-router-dom";

import {ThemeProvider} from "@mui/material";
import theme from "./mui/Theme";
import App from './App';


import './styles/index.css';
import './styles/fonts.css';

const client = new ApolloClient({
  uri : process.env.REACT_APP_GRAPHCMS_URI,
  cache : new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
  </BrowserRouter>

);


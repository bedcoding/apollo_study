import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apollo"

// React Application을 client로 감싸야 한다. ApolloProvider는 client가 필요하다.
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
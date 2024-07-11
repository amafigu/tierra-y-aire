import App from '@/components/App';
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import client from './graphql/main';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>
)

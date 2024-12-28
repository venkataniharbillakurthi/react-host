import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { StateContextProvider } from './Context/index.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <StateContextProvider>
        <App />
    </StateContextProvider>
  </QueryClientProvider>
);

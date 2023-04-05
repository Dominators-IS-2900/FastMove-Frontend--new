import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider 
        domain="dev-0l3gdw0jorydheor.us.auth0.com" 
        clientId="NpmGXILyWJIYsRjErjJxYb536fWIepPP" 
        redirectUri={window.location.origin}>
       <App />
      </Auth0Provider>
    </BrowserRouter>
    
  </React.StrictMode>
);

// reportWebVitals();

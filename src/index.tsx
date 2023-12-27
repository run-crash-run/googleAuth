import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { GoogleOAuthProvider } from '@react-oauth/google'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="client ID goes here...">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
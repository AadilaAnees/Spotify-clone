import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'// Make sure this line exists and points to your CSS file
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import PlayerContextProvider from './context/Playercontext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <PlayerContextProvider>
    <App />
   </PlayerContextProvider>
   
   </BrowserRouter>
    
  </React.StrictMode>,
);
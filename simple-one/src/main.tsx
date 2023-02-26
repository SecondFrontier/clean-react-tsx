import React from 'react'
import ReactDOM from 'react-dom/client'
import { MuiTextField } from './components/MuiTextField'
import ReRoute from './components/ReRoute'
import TopBar from './components/TopBar'


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
  <TopBar />
  </>
);

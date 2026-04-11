import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SmoothScroll from './components/scroll/SmoothScroll.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <SmoothScroll/>
    <App />
  </StrictMode>
</BrowserRouter>,
)

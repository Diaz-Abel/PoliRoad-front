import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NavigationMenu } from './components/ui/navigation-menu'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
  </StrictMode>,
)

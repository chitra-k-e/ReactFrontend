import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
import Myroot from './Myroot'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Myroot />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Contextrecipe from './Context/Contextrecipe.jsx'


createRoot(document.getElementById('root')).render(
 <Contextrecipe>
    <BrowserRouter>

      <App />
    </BrowserRouter>
 </Contextrecipe>



)

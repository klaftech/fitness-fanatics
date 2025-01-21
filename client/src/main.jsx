import { StrictMode } from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

//import { createRoot } from 'react-dom/client'
//import './assets/css/index.css'
import App from './components/App.jsx'

ReactDom.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </StrictMode>,
  document.getElementById('root')
)


/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/
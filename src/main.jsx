import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import {Home} from './components/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home></Home>}>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)

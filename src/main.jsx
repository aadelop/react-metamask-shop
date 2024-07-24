import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<h1> Root path 1 </h1>}>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)

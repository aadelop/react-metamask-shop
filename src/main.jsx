import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import {Home} from './components/Home'
import { Product } from './components/Product'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}></QueryClientProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home></Home>}>
          <Route path="/products" element={<Product></Product>}></Route>
          <Route path="/balance" element={<span> Balance </span>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)

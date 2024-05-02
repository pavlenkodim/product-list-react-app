import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Products from './components/products/Products.jsx'
import Add from './components/add/Add.jsx'

import Navbar from './components/navBar/NavBar.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={App}/>
        <Route path='/products' Component={Products}/>
        <Route path='/add' Component={Add}/>
      </Routes>
  </BrowserRouter>
)

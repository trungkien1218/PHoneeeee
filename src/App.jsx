import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Login from './routes/Login'

import ShoppingCart from './routes/ShoppingCart'
import Signup from './routes/Signup'
import Root from './routes/Root'

import AppProvider from './context/AppContext'
import { ProductDetail } from './routes/ProductDetail'
import { ProductList } from './routes/ProductList'
import ShoppingCartProvider from './context/ShoppingCartContext'
import './App.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products/:productId", element: <ProductDetail />},
      { path: "login", element: <Login /> },
      { path: "products", element: <ProductList /> },
      { path: "shoppingcart", element: <ShoppingCart /> },
      { path: "signup", element: <Signup /> },
    ]
  }
])

function App() {


  return (
    <>
      <AppProvider>

        <ShoppingCartProvider >
        <RouterProvider router={router} />
        </ShoppingCartProvider>
      </AppProvider>
    </>
  )
}

export default App

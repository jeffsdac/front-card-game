import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Configurando Router
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './routes/Home.jsx'
import MenuInicial from './routes/MenuInicial.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "inicio",
    element: <MenuInicial/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

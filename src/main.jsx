import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './routes/Home.jsx'
import MenuInicial from './routes/MenuInicial.jsx'
import DeckDetails from './routes/DeckDetails.jsx';
import RegistrarUsuario from './routes/RegistrarUsuario.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';
import UploadPhoto from './routes/UploadPhoto.jsx';
import PutCardsInDeck from './routes/PutCardsInDeck.jsx';
import Sobre from './routes/Sobre.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "inicio",
    element: <MenuInicial/>
  },
  {
    path: "putcards",
    element: <PutCardsInDeck/>
  },
  {
    path:"deckdetail",
    element:<DeckDetails/>
  },
  {
    path:"registrar",
    element:<RegistrarUsuario/>
  },
  {
    path:"photo-post",
    element: <UploadPhoto/>
  },
  {
    path:"sobre",
    element:<Sobre/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition: Bounce
      />
    </AuthProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// configurando o router

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './routes/Home'
import { Contact } from './routes/Contact'
import { ErrorPage } from './routes/ErrorPage'
import { ContactDetails } from './routes/contactDatails'

const router = createBrowserRouter([
  
  { 
    path: '/', element: <App />,
    //criando uma rota de erro
    errorElement: <ErrorPage />,
    children: [ 
      { 
        path: '/', 
        element: <Home /> 
      },
      { 
        path: '/contact', 
        element: <Contact /> 
      },

      // nested routes  - identificador unico - rota aninhada
      {
        path: '/contact/:id',
        element: <ContactDetails />
      },
      
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/router'
import { RouterProvider } from 'react-router'
import ListProvider from './Context/ListProvider'

createRoot(document.getElementById('root')).render(
 
  <ListProvider>
    <RouterProvider router={router}>

  </RouterProvider>
  </ListProvider>
 
)

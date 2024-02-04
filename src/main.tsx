import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/bootstrap/bootstrap-grid.css'
import './main.css'
import { RouterProvider } from 'react-router-dom'
import router from './plugins/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

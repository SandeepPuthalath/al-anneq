import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { NotificationProvider } from './components/notification/NotificationProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotificationProvider>
      <RouterProvider router={router} />
    </NotificationProvider>
  </StrictMode>
)

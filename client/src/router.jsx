import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/layouts/Layout'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Services = React.lazy(() => import('./pages/Services'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: (
        <React.Suspense fallback={null}>
          <Home />
        </React.Suspense>
      ) },
      { path: 'about', element: (
        <React.Suspense fallback={null}>
          <About />
        </React.Suspense>
      ) },
      { path: 'services', element: (
        <React.Suspense fallback={null}>
          <Services />
        </React.Suspense>
      ) },
      { path: '*', element: (
        <React.Suspense fallback={null}>
          <NotFound />
        </React.Suspense>
      ) },
    ],
  },
])

export default router

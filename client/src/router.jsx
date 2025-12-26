import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/layouts/Layout'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Services = React.lazy(() => import('./pages/Services'))
const Contact = React.lazy(() => import('./pages/Contact'))
const WallCoverings = React.lazy(() => import('./pages/WallCoverings'))
const CurtainsAndBlinds = React.lazy(() => import('./pages/CurtainsAndBlinds'))
const FlooringSolutions = React.lazy(() => import('./pages/FlooringSolutions'))
const WallpaperSupply = React.lazy(() => import('./pages/WallpaperSupply'))
const WallPainting = React.lazy(() => import('./pages/WallPainting'))
const NotFound = React.lazy(() => import('./pages/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { 
        index: true, 
        element: (
          <React.Suspense fallback={null}>
            <Home />
          </React.Suspense>
        ) 
      },
      { 
        path: 'about', 
        element: (
          <React.Suspense fallback={null}>
            <About />
          </React.Suspense>
        ) 
      },
      { 
        path: 'services', 
        element: (
          <React.Suspense fallback={null}>
            <Services />
          </React.Suspense>
        ),
      },
      { 
        path: 'Contact', 
        element: (
          <React.Suspense fallback={null}>
            <Contact />
          </React.Suspense>
        ),
      },
      { 
        path: 'services/wall-coverings', 
        element: (
          <React.Suspense fallback={null}>
            <WallCoverings />
          </React.Suspense>
        ) 
      },
      { 
        path: 'services/curtains-blinds', 
        element: (
          <React.Suspense fallback={null}>
            <CurtainsAndBlinds />
          </React.Suspense>
        ) 
      },
      { 
        path: 'services/flooring-solutions', 
        element: (
          <React.Suspense fallback={null}>
            <FlooringSolutions />
          </React.Suspense>
        ) 
      },
      { 
        path: 'services/wall-paintings', 
        element: (
          <React.Suspense fallback={null}>
            <WallPainting />
          </React.Suspense>
        ) 
      },
      { 
        path: 'services/customized-wallpaper', 
        element: (
          <React.Suspense fallback={null}>
            <WallpaperSupply />
          </React.Suspense>
        ) 
      },
      { 
        path: '*', 
        element: (
          <React.Suspense fallback={null}>
            <NotFound />
          </React.Suspense>
        ) 
      },
    ],
  },
])

export default router
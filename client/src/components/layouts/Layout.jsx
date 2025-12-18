import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header logo="Al-Aneeq" />

      <main className="flex-1 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>

      <Footer/>
    </div>
  )
}

export default Layout

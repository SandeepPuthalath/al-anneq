import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header logo="MyApp" />

      <main className="flex-1 p-4 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
        <p>&copy; 2024 MyApp. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout

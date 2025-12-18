import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = ({ 
  logo = 'Logo', 
  navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
  ],
  onNavClick = () => {},
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    onNavClick(!isOpen)
  }

  const location = useLocation()

  return (
    <header className={`bg-white text-gray-600 ${className}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="shrink-0">
              <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition">
                {logo}
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`transition duration-300 relative group ${isActive ? 'text-[#003232]' : 'hover:text-[#003232]'}`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full text-[16px]"></span>
                  </Link>
                )
              })}
            </div>

            <div className="hidden md:block">
              <Link
                to="/contact"
                className="px-8 py-2 min-w-[220px] rounded-md bg-[#18181B] text-[#FFFFFF] text-[16px] font-normal hover:opacity-90 transition text-center"
              >
                Contact Us
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-800 transition"
                aria-label="Toggle menu"
              >
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md transition ${isActive ? 'text-[#003232]' : 'hover:bg-gray-800'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="px-3">
              <Link
                to="/contact"
                className="block w-full text-center px-4 py-2 rounded-md bg-[#18181B] text-[#FFFFFF] font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

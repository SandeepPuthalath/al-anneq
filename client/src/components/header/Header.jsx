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
              <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition flex justify-center items-end space-x-2">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.40561e-06 5.69582L1.8376 7.29958L1.88596 15.9352L1.93431 24.5709H7.40561e-06V5.69582Z" fill="#008A8A"/>
<path d="M7.47933 14.2081H9.41363V24.5709H7.47933V14.2081Z" fill="#008A8A"/>
<path d="M9.41363 17.539V19.3895H7.40561e-06V17.539H9.41363Z" fill="#008A8A"/>
<path d="M16.0548 22.9671V24.8176H7.47933V22.9671H16.0548Z" fill="#008A8A"/>
<path d="M23.5341 20.8082V22.6587H14.1204V20.8082H23.5341Z" fill="#008A8A"/>
<path d="M21.8527 11.489L23.2009 12.8159L16.0548 19.5745L14.1204 18.896L21.8527 11.489Z" fill="#008A8A"/>
<path d="M11.7126 1.06958L13.0823 2.37615L5.88316 9.2837L4.51339 7.97713L11.7126 1.06958Z" fill="#008A8A"/>
<path d="M14.1204 18.896H16.0548V24.5709H14.1204V18.896Z" fill="#008A8A"/>
<path d="M21.5998 10.1987H23.5341V24.5709H21.5998V10.1987Z" fill="#008A8A"/>
<path d="M10.4021 2.40642L11.7798 1.10745L21.079 10.1337L19.7013 11.4327L10.4021 2.40642Z" fill="#008A8A"/>
<path d="M4.72457e-06 7.88557L0 5.51077L9.41363 14.2081L7.47933 14.9791L4.72457e-06 7.88557Z" fill="#008A8A"/>
<path d="M9.60707 10.1987H11.1545V11.6791H9.60707V10.1987Z" fill="#008A8A"/>
<path d="M9.60707 7.85473H11.1545V9.33512H9.60707V7.85473Z" fill="#008A8A"/>
<path d="M12.1861 7.85473H13.7336V9.33512H12.1861V7.85473Z" fill="#008A8A"/>
<path d="M12.1861 10.1987H13.7336V11.6791H12.1861V10.1987Z" fill="#008A8A"/>
</svg>
<svg width="101" height="17" viewBox="0 0 101 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.88827 15.1416H1.89832e-06L5.2587 0.204272H8.59918L13.8652 15.1416H10.9769L6.98729 3.26759H6.87059L2.88827 15.1416ZM2.98309 9.28483H10.8602V11.4583H2.98309V9.28483ZM15.8326 15.1416V0.204272H18.5386V12.8733H25.1174V15.1416H15.8326ZM34.4788 15.1416H31.5905L36.8492 0.204272H40.1897L45.4557 15.1416H42.5674L38.5778 3.26759H38.4611L34.4788 15.1416ZM34.5736 9.28483H42.4507V11.4583H34.5736V9.28483ZM59.6983 0.204272V15.1416H57.2914L50.253 4.967H50.129V15.1416H47.4231V0.204272H49.8446L56.8756 10.3862H57.0069V0.204272H59.6983ZM62.6467 15.1416V0.204272H72.3618V2.47259H65.3526V6.52784H71.8586V8.79615H65.3526V12.8733H72.4202V15.1416H62.6467ZM75.1224 15.1416V0.204272H84.8375V2.47259H77.8284V6.52784H84.3343V8.79615H77.8284V12.8733H84.8959V15.1416H75.1224ZM93.1632 10.1236H95.6139L97.0653 12.0053L98.101 13.2307L100.588 16.4253H97.9624L96.2703 14.281L95.5482 13.2598L93.1632 10.1236ZM100.946 7.67294C100.946 9.2824 100.644 10.6609 100.041 11.8084C99.443 12.9511 98.6261 13.8263 97.5904 14.4341C96.5596 15.0419 95.3902 15.3458 94.0822 15.3458C92.7742 15.3458 91.6024 15.0419 90.5667 14.4341C89.5359 13.8215 88.719 12.9438 88.116 11.8011C87.518 10.6536 87.2189 9.27753 87.2189 7.67294C87.2189 6.06348 87.518 4.68742 88.116 3.54475C88.719 2.39722 89.5359 1.51955 90.5667 0.911752C91.6024 0.303951 92.7742 5.03269e-05 94.0822 5.03269e-05C95.3902 5.03269e-05 96.5596 0.303951 97.5904 0.911752C98.6261 1.51955 99.443 2.39722 100.041 3.54475C100.644 4.68742 100.946 6.06348 100.946 7.67294ZM98.225 7.67294C98.225 6.53999 98.0475 5.58453 97.6925 4.80654C97.3425 4.0237 96.8562 3.43291 96.2338 3.0342C95.6114 2.63062 94.8942 2.42883 94.0822 2.42883C93.2702 2.42883 92.553 2.63062 91.9306 3.0342C91.3082 3.43291 90.8195 4.0237 90.4646 4.80654C90.1145 5.58453 89.9394 6.53999 89.9394 7.67294C89.9394 8.80588 90.1145 9.76377 90.4646 10.5466C90.8195 11.3246 91.3082 11.9154 91.9306 12.319C92.553 12.7177 93.2702 12.917 94.0822 12.917C94.8942 12.917 95.6114 12.7177 96.2338 12.319C96.8562 11.9154 97.3425 11.3246 97.6925 10.5466C98.0475 9.76377 98.225 8.80588 98.225 7.67294Z" fill="#008A8A"/>
</svg>

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
                    className={`transition duration-300 relative font-medium group ${isActive ? 'text-[#003232]' : 'hover:text-[#003232]'}`}
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
                className="ml-6 px-6 py-2 text-sm min-w-[220px] rounded-md bg-[#18181B] text-[#FFFFFF] text-[16px] font-normal hover:opacity-90 transition text-center"
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
            <div className="mt-8">
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

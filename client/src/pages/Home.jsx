import React from 'react'

const Home = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className='uppercase mt-8 mb-8 px-4'>
        <h1 className='text-[#18181B] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[98px] font-semibold leading-none'>
          Creating Spaces
        </h1>
        <h1 className='text-[#18181B] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[98px] font-semibold leading-none'>
          That Last <span className='text-[#049E9E]'>Beyond Time.</span>
        </h1>
      </div>
      <div className='mb-8 px-8'>
        <p className='text-[#0C0C0D] text-sm sm:text-base md:text-lg max-w-3xl'>
          We integrate design innovation, skilled execution, and deep client understanding to create interiors that reflect elegance, comfort, and functionality.
        </p>
      </div>
      <div className=''>
        <img 
          src="src/assets/Rectangle 6.png" 
          alt="Interior design showcase" 
          className='w-full h-auto object-cover'
        />
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import { ArrowUpRight, Star } from "lucide-react"

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className='uppercase mt-8 mb-8 px-4'>
  <h1 className='text-[#18181B] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-semibold leading-none'>
    Creating Spaces
  </h1>
  <h1 className='text-[#18181B] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-semibold leading-none'>
    That Last <span className='text-[#049E9E]'>Beyond Time.</span>
  </h1>
</div>
      <div className='mb-16 px-8'>
        <p className='text-[#0C0C0D] text-sm sm:text-base md:text-lg'>
          We integrate design innovation, skilled execution, and deep client understanding to create interiors that reflect elegance, comfort, and functionality.
        </p>
      </div>
      <div className=''>
        <img 
          src="src/assets/Rectangle 6.png" 
          alt="Interior design showcase" 
          className='w-full h-auto object-cover'
          loading="lazy"
        />
      </div>
      <section className="bg-[#1a1a1a] text-white py-16 px-8 mb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="space-y-8">
            <h3 className="text-xs uppercase tracking-wider text-[#92E4E4]">About Us</h3>
            
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-[26px] leading-relaxed">
                <span className="text-[#F8F8F8] font-semibold">AL ANEEQ GENERAL MAINTENANCE LLC established in 2014, is an expert interior design and contracting firm for Homes, Villas, and Hotel apartments, Residential and Commercial projects.</span>
                <span className="text-[#979797] font-normal"> We ensure successful, on-time delivery through our skilled team and dedicated project management.</span>
              </h2>
            </div>

            <div className="pt-8">
              <p className="text-sm sm:text-base text-[#F8F8F8] leading-relaxed">
                Our mission to attain a prominent position by conveying quality operations, maintenance and support services to all our esteemed clients who desires our skills and experience.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-8">
  <div className="text-center transition-transform hover:scale-110 duration-300 cursor-default">
    <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#92E4E4] leading-none mb-2">
      10<span className="text-[#FFFFFF]">+</span>
    </div>
    <p className="text-sm text-gray-300">
      Experience in the industry.
    </p>
  </div>

  <div className="text-center transition-transform hover:scale-110 duration-300 cursor-default">
    <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#92E4E4] leading-none mb-2">
      177<span className="text-[#FFFFFF]">+</span>
    </div>
    <p className="text-sm text-gray-300">
      Projects Completed.
    </p>
  </div>

  <div className="text-center transition-transform hover:scale-110 duration-300 cursor-default">
    <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#92E4E4] leading-none mb-2">
      95<span className="text-[#FFFFFF]">%</span>
    </div>
    <p className="text-sm text-gray-300">
      Client Satisfaction Rate
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
    <div className="mb-16 px-8">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-0">
        {/* Left - Image */}
        <div className="bg-gray-800 h-96 md:h-auto flex items-center justify-center">
          <img 
            src="src/assets/Rectangle 8.png" 
            alt="Bedroom interior" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Right - Menu */}
        <div className="bg-white px-8 md:px-12 flex flex-col">
          <div className="mb-12">
            <p className="text-xl font-normal text-[#008A8A] mb-6">Services</p>
            <p className="text-sm sm:text-base text-[#211D1E]">
              Our mission to attain a prominent position by conveying quality operations, maintenance and support services to all our esteemed clients who desires our skills and experience.
            </p>
          </div>
          
          <nav className="space-y-4 mb-20">
            <a href="#" className="flex justify-between items-center py-3 border-b border-gray-200 hover:text-gray-600 transition">
              <span className="text-sm font-medium">Wall Coverings</span>
              <span className="text-[#211D1E]"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13L7 7L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
            </a>
            <a href="#" className="flex justify-between items-center py-3 border-b border-gray-200 hover:text-gray-600 transition">
              <span className="text-sm font-medium">Flooring Solutions</span>
              <span className="text-[#211D1E]"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13L7 7L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
            </a>
            <a href="#" className="flex justify-between items-center py-3 border-b border-gray-200 hover:text-gray-600 transition">
              <span className="text-sm font-medium">Wall Paintings</span>
              <span className="text-[#211D1E]"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13L7 7L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
            </a>
            <a href="#" className="flex justify-between items-center py-3 border-b border-gray-200 hover:text-gray-600 transition">
              <span className="text-sm font-medium">Customized Wallpaper Supply</span>
              <span className="text-[#211D1E]"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13L7 7L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
            </a>
            <a href="#" className="flex justify-between items-center py-3 border-b border-gray-200 hover:text-gray-600 transition">
              <span className="text-sm font-medium">Curtains & Blinds</span>
              <span className="text-[#211D1E]"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13L7 7L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
            </a>
          </nav>
          
         <button className="mt-8 rounded-lg bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition w-fit flex items-center gap-2">
  View All
  <ArrowUpRight className="w-4 h-4" />
</button>
        </div>
      </div>
    </div>
    <div className="pb-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* First Row - Customer Satisfaction */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left - Text Content */}
          <div className="flex flex-col">
            <h2 className="text-[#008A8A] text-xl font-normal mb-4">
              Customer satisfaction
            </h2>
            <p className="text-[#211D1E] text-sm md:text-base leading-relaxed">
              Customer satisfaction is our primary objective. We take time to
              understand our customer's needs so as to meet their demands to their satisfaction. The perfect blend of our superior workmanship and affordable pricing adds more to our customer satisfaction.
            </p>
          </div>
          
          {/* Right - Image */}
          <div className="flex items-center justify-center">
            <div className="w-full overflow-hidden">
              <img 
                src="src/assets/Rectangle 9.png" 
                alt="Bedroom with leaf wallpaper" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Second Row - Our Team */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Image */}
          <div className="flex items-center justify-center order-2 md:order-1">
            <div className="w-full overflow-hidden">
              <img 
                src="src/assets/Rectangle 10.png" 
                alt="Bedroom with floral wallpaper" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Right - Text Content */}
          <div className="flex flex-col order-1 md:order-2">
            <h2 className="text-[#008A8A] text-xl font-normal mb-4">
              Our Team
            </h2>
            <p className="text-[#211D1E] text-sm md:text-base leading-relaxed">
              Our team includes qualified project engineers, project supervisors, and skilled and semi-skilled laborers. In this competitive market, AL ANEEQ GENERAL MAINTENANCE LLC stands out due to our dedication and exceptional service to our clients. We would welcome the opportunity to provide you with the same dedicated service currently enjoyed by our other privileged clients.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="px-8">
      <div className="">
        <div className="grid grid-cols-2">
          {/* Image 1 */}
          <div className=" bg-gray-300 overflow-hidden">
            <img 
              src="src/assets/square 1.png" 
              alt="Interior 1" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          
          {/* Image 2 */}
          <div className=" bg-gray-300 overflow-hidden">
            <img 
              src="src/assets/square 2.png" 
              alt="Interior 2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          
          {/* Image 3 */}
          <div className=" bg-gray-300 overflow-hidden">
            <img 
              src="src/assets/square 4.png" 
              alt="Interior 3" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          
          {/* Image 4 */}
          <div className=" bg-gray-300 overflow-hidden">
            <img 
              src="src/assets/square 3.png" 
              alt="Interior 4" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#BDE1E1] py-16 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[#008A8A] text-sm mb-2">Testimonials</p>
          <h2 className="text-[#18181B] text-3xl md:text-4xl font-semibold">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#D8EEED] p-6 transition-transform hover:scale-105 duration-300">
            <h3 className="text-[#211D1E] font-semibold text-lg mb-3">
              "Outstanding workmanship!"
            </h3>
            <p className="text-[#211D1E] text-sm leading-relaxed mb-4">
              AL AMEEQ's attention to detail and timely execution truly impressed us. Our new office interior exceeded expectations.
            </p>
            <div className="flex gap-1">
              <Star className="w-4 h-4 fill-black stroke-black" />
              <Star className="w-4 h-4 fill-black stroke-black" />
              <Star className="w-4 h-4 fill-black stroke-black" />
              <Star className="w-4 h-4 fill-black stroke-black" />
              <Star className="w-4 h-4 fill-none stroke-black" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#D8EEED] p-6 transition-transform hover:scale-105 duration-300">
            <h3 className="text-[#211D1E] font-semibold text-lg mb-3">
              "Professional and reliable."
            </h3>
            <p className="text-[#211D1E] text-sm leading-relaxed mb-4">
              From planning to finishing touches, their team was responsive and professional throughout the project.
            </p>
            <div className="flex gap-1">
              <Star className="w-4 h-4 fill-black stroke-black" />
              <Star className="w-4 h-4 fill-black stroke-black" />
              <Star className="w-4 h-4 fill-black stroke-black" />
              <Star className="w-4 h-4 fill-black stroke-black" />
              <Star className="w-4 h-4 fill-none stroke-black" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#D8EEED] p-6 transition-transform hover:scale-105 duration-300">
            <h3 className="text-[#211D1E] font-semibold text-lg mb-3">
              "Great experience overall."
            </h3>
            <p className="text-[#211D1E] text-sm leading-relaxed mb-4">
              They understood our requirements perfectly and provided elegant, practical solutions within budget.
            </p>
            <div className="flex gap-1">
              <Star className="w-4 h-4 fill-black stroke-black" />
              <Star className="w-4 h-4 fill-black stroke-black" />
              <Star className="w-4 h-4 fill-black stroke-black" />
              <Star className="w-4 h-4 fill-black stroke-black" />
              <Star className="w-4 h-4 fill-none stroke-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
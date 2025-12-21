    import React from 'react'
    import { useState, useEffect } from 'react';
    import aboutImg from '../assets/Rectangle 11.png';

    export default function About(){

        const [imageLoaded, setImageLoaded] = useState(false);
        const [contentLoaded, setContentLoaded] = useState(false);
        
          useEffect(() => {
            // Simulate content loading
            const timer = setTimeout(() => {
              setContentLoaded(true);
            }, 500);
            return () => clearTimeout(timer);
          }, []);

           if (!contentLoaded) {
    return (
      <div className="animate-pulse">
        {/* Top Section Skeleton */}
        <div className="px-4 md:px-8 mt-16 mb-8">
          <div className="h-12 md:h-16 bg-gray-200 rounded w-40 mb-8"></div>
          <div className="max-w-5xl space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>

        {/* Two Column Section Skeleton */}
        <div className="px-4 md:px-8 mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Side Skeleton */}
            <div className="w-full lg:w-1/2 space-y-12">
              <div>
                <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
                <div className="space-y-3 mb-6">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                </div>
              </div>
              <div>
                <div className="h-8 bg-gray-200 rounded w-56 mb-6"></div>
                <div className="space-y-3 mb-6">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>

            {/* Right Side Image Skeleton */}
            <div className="w-full lg:w-1/2 h-96 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Team Section Skeleton */}
        <div className="bg-gray-300 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="h-8 bg-gray-400 rounded w-64 mx-auto mb-12"></div>
            <div className="border-t border-gray-400 mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="text-center">
                  <div className="h-16 w-16 bg-gray-400 rounded-full mx-auto mb-4"></div>
                  <div className="h-6 bg-gray-400 rounded w-48 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-400 rounded w-56 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Skeleton */}
        <div className="bg-gray-800 py-12 px-4">
          <div className="max-w-8xl mx-auto">
            <div className="flex items-center justify-center gap-16 mb-6">
              <div className="h-32 w-24 bg-gray-700 rounded"></div>
              <div>
                <div className="h-8 bg-gray-700 rounded w-48 mb-12"></div>
                <div className="flex gap-8">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="h-6 bg-gray-700 rounded w-40"></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 my-8"></div>
            <div className="text-center space-y-3">
              <div className="h-8 bg-gray-700 rounded w-96 mx-auto"></div>
              <div className="h-4 bg-gray-700 rounded w-80 mx-auto"></div>
              <div className="h-4 bg-gray-700 rounded w-64 mx-auto"></div>
              <div className="h-4 bg-gray-700 rounded w-72 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

    return (
        <div>
        <div className="px-4 md:px-8 mt-16 mb-8">
  <h1 className="mb-8 uppercase text-4xl md:text-6xl text-[#008A8A] font-bold">About</h1>
  <p className="max-w-5xl text-[#0C0C0D] text-sm md:text-base font-normal">
  Established in 2014, AL ANEEQ GENERAL MAINTENANCE LLC has immense pleasure in introducing ourselves as one of the growing interior designers and contractors of residential and commercial projects. Our talented team of professionals has extensive technical knowledge and skills with a successful track record of practical experience. A dedicated project team is assigned to closely monitor each project to ensure successful and timely completion.
</p>
</div>

<div className="px-4 md:px-8 mb-16">
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
    {/* Text Section */}
    <div className="w-full lg:w-1/2 space-y-12 md:space-y-16">
      {/* Our Approach */}
      <div>
        <h3 className="mb-6 text-[#008A8A] text-2xl md:text-3xl font-medium">Our Approach</h3>
        <p className="text-[#0C0C0D] text-sm md:text-base font-normal mb-6">
  Our strength lies in integrating professional expertise, precision, workmanship, and perfect understanding of client needs to come up with design solutions that are not only exclusive but cost-effective as well.
</p>
        <p className="text-[#0C0C0D] text-sm md:text-base font-normal mb-6">
  Our commitment to every project is total, with a well-planned project execution program including timely allocation of resources, monitoring progress, and coordinating activities with other agencies involved.
</p>
      </div>

      {/* Customer Satisfaction */}
      <div>
        <h3 className="mb-6 text-[#008A8A] text-2xl md:text-3xl font-medium">Customer Satisfaction</h3>
        <p className="text-[#0C0C0D] text-sm md:text-base font-normal mb-6">
          Customer satisfaction is our primary objective. We take time to understand our customer's needs so as to meet their demands to their satisfaction. Our relationship with the customer begins with trust and honesty.
        </p>
        <p className="text-[#0C0C0D] text-sm md:text-base font-normal mb-6">
          The operational practices are focused on identifying, understanding, and meeting their needs and expectations. The perfect blend of our superior workmanship and affordable pricing adds more to our customer satisfaction.
        </p>
      </div>
    </div>

    {/* Image Section */}
    <div className="w-full lg:w-1/2 relative overflow-hidden">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse">
                <div className="w-full h-full linear-to-r from-gray-200 via-gray-300 to-gray-200"></div>
              </div>
            )}
            <img 
              src={aboutImg}
              alt="Interior design project by AL ANEEQ"
              className={`w-full h-auto object-cover transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              loading='lazy'
            />
          </div>
  </div>
</div>
            <div className="bg-[#211D1EF5] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-2">
                <span className="text-[#FFFFFF]">Our</span>{" "}
                <span className="text-[#FFFFFF]">Professional Team</span>
            </h2>
            </div>

            {/* Divider Line */}
            <div className="border-t border-[#6A6B6C] mb-12"></div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Supervisors */}
            <div className="text-center transition-transform hover:scale-110 duration-300">
                <div className="flex justify-center mb-4">
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.4703 4.33352V8.23783C23.4703 8.5489 23.7223 8.80033 24.0328 8.80033C24.3433 8.80033 24.5953 8.5489 24.5953 8.23783V2.06777C24.5953 1.85908 24.7652 1.68921 24.9733 1.68921H29.0233C29.2388 1.68921 29.4013 1.85177 29.4013 2.06777V8.2384C29.4013 8.54946 29.6533 8.8009 29.9638 8.8009C30.2743 8.8009 30.5263 8.54946 30.5263 8.2384V4.33352C33.0058 5.57327 34.6815 8.05615 34.8818 10.8332H19.1143C19.3146 8.05615 20.9903 5.57327 23.4703 4.33352ZM18.6115 11.9582H35.3852C36.0158 11.9582 36.5288 12.4712 36.5288 13.1018C36.5288 13.6305 36.1654 14.0732 35.676 14.2026C35.6597 14.2071 35.644 14.2121 35.6282 14.2172C35.5494 14.2341 35.4684 14.2448 35.3846 14.2448H18.6109C18.5248 14.2448 18.441 14.233 18.36 14.215C18.3476 14.2105 18.3358 14.2065 18.3223 14.2031C17.8318 14.0743 17.4668 13.6311 17.4668 13.1012C17.4679 12.4712 17.9809 11.9582 18.6115 11.9582ZM18.846 15.3698H35.1501C34.4059 19.2544 31.018 22.1063 26.9983 22.1063C22.9787 22.1063 19.5908 19.2544 18.846 15.3698ZM19.6639 23.2313H34.3333C38.1285 23.2313 41.229 26.2553 41.3415 30.015H12.6557C12.7676 26.2553 15.8681 23.2313 19.6639 23.2313Z" fill="white"/>
<path d="M46.467 32.837H37.8889C37.5784 32.837 37.3264 33.0885 37.3264 33.3995C37.3264 39.0943 32.6936 43.727 26.9989 43.727C21.3042 43.727 16.6708 39.0943 16.6708 33.3995C16.6708 33.0885 16.4188 32.837 16.1083 32.837H7.53021C7.21971 32.837 6.96771 33.0885 6.96771 33.3995V35.9027C6.96771 36.1457 7.12352 36.3611 7.35471 36.437L11.0008 37.6329C11.3845 39.0678 11.9576 40.442 12.7075 41.7273L10.9665 45.1513C10.8568 45.3684 10.8985 45.6317 11.0706 45.8032L14.6104 49.343C14.7837 49.5168 15.0492 49.5568 15.2668 49.4448L17.4758 48.3007L18.67 47.7033C20.0037 48.47 21.3823 49.0393 22.7785 49.3998L23.9608 53.0437C24.0368 53.2744 24.2522 53.4307 24.4952 53.4307H29.502C29.745 53.4307 29.9605 53.2749 30.0364 53.0437L30.82 50.6621L31.2188 49.401C32.6503 49.0331 34.0301 48.4638 35.3295 47.705L38.7304 49.4454C38.9481 49.5573 39.2142 49.5174 39.3868 49.3436L42.9407 45.8055C43.1151 45.6328 43.1573 45.3673 43.0448 45.149L41.2898 41.7279C42.0396 40.4426 42.6128 39.0678 42.9964 37.6335L46.6425 36.4376C46.8731 36.3617 47.0295 36.1457 47.0295 35.9032V33.4001C47.0295 33.0885 46.7775 32.837 46.467 32.837Z" fill="white"/>
<path d="M26.9983 40.1484C30.7198 40.1484 33.7478 37.121 33.7478 33.3995C33.7478 33.0885 33.4958 32.837 33.1853 32.837H20.812C20.5015 32.837 20.2495 33.0885 20.2495 33.3995C20.2495 37.121 23.2768 40.1484 26.9983 40.1484Z" fill="white"/>
</svg>

                </div>
                <h3 className="text-[#92E4E4] text-xl font-normal mb-2">Project Supervisors</h3>
                <p className="text[#F8F8F8] text-sm max-w-xs mx-auto">
                Dedicated supervisors ensuring quality and timely delivery.
                </p>
            </div>

            {/* Skilled Labour */}
            <div className="text-center transition-transform hover:scale-110 duration-300">
                <div className="flex justify-center mb-4">
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3464 29.6226C31.66 28.312 28.6418 27.5762 25.4515 27.5762C22.7145 27.5762 20.1044 28.1185 17.7215 29.0998C18.1487 29.2599 18.5666 29.4447 18.9728 29.6535L19.9232 29.2313C20.6794 28.8955 21.5686 29.0606 22.1536 29.6457L24.1123 31.6042C24.6973 32.1893 24.8625 33.0786 24.5266 33.8347L24.1048 34.7845C24.1338 34.841 24.1624 34.8977 24.1904 34.9546H34.3465V29.6226H34.3464ZM35.4209 13.6279C35.4209 9.67389 33.0906 6.09966 29.4788 4.50307L29.0725 7.63233C28.9005 8.95607 27.7838 9.944 26.4476 9.944H24.4557C23.1194 9.944 22.0028 8.95607 21.8309 7.63233L21.4245 4.50297C17.8132 6.09945 15.4824 9.67336 15.4824 13.627L35.4209 13.6279ZM36.5311 16.5976C36.882 16.5976 37.1723 16.3075 37.1723 15.9565C37.1723 15.6055 36.8821 15.3153 36.5311 15.3153C29.1448 15.3153 21.7584 15.3153 14.3721 15.3153C14.0212 15.3153 13.731 15.6056 13.731 15.9565C13.731 16.3073 14.0212 16.5976 14.3721 16.5976H36.5311ZM27.9395 3.30263L27.4047 7.42129C27.3415 7.90813 26.9368 8.25649 26.4475 8.25649H24.4556C23.9662 8.25649 23.5616 7.90824 23.4984 7.42129C23.32 6.04766 23.0486 4.58745 22.9577 3.22606C22.9342 2.88033 23.1258 2.63533 23.4094 2.46225C23.8337 2.20322 24.432 2.06443 24.9906 1.99197C25.3446 1.94598 25.5591 1.94609 25.9129 1.99197C26.4714 2.06443 27.0696 2.20333 27.4938 2.46236C27.8105 2.65568 27.9889 2.92273 27.9395 3.30263ZM33.6948 52.0424L30.3572 48.7047L37.3509 41.711C37.6361 41.4258 38.1027 41.4258 38.3879 41.711L40.6886 44.0117C40.9738 44.2969 40.9738 44.7635 40.6886 45.0485L33.6948 52.0424ZM39.8826 40.8191L41.5804 42.517L48.5567 35.5406L50.4068 34.856L52.2212 31.9561C52.3003 31.8296 52.2821 31.67 52.1766 31.5646L50.8349 30.2227C50.7294 30.1172 50.5697 30.0991 50.4433 30.1782L47.5434 31.9927L46.8588 33.8427L39.8826 40.8191ZM25.2044 38.5092L23.4457 37.8323C23.197 36.7867 22.7825 35.7881 22.219 34.873L22.9844 33.1497C23.0386 33.0276 23.0134 32.8919 22.919 32.7975L20.9603 30.8389C20.8658 30.7444 20.7302 30.7193 20.6082 30.7735L18.8843 31.5391C17.9693 30.9758 16.971 30.5613 15.9258 30.3126L15.2487 28.5535C15.2007 28.429 15.0869 28.3508 14.9534 28.3508H12.1835C12.05 28.3508 11.9362 28.429 11.8883 28.5535L11.2112 30.3126C10.1659 30.5613 9.16765 30.9758 8.2526 31.5391L6.52872 30.7735C6.4068 30.7193 6.27095 30.7446 6.17656 30.8389L4.218 32.7976C4.1235 32.892 4.0983 33.0277 4.15251 33.1498L4.9181 34.8735C4.35469 35.7885 3.9402 36.787 3.6915 37.8323L1.9326 38.5094C1.80804 38.5574 1.72989 38.6712 1.72989 38.8046V41.5745C1.72989 41.708 1.80804 41.8218 1.9326 41.8697L3.69129 42.5466C3.94009 43.5921 4.35448 44.5909 4.918 45.5058L4.15261 47.2292C4.0984 47.3512 4.12361 47.487 4.218 47.5814L6.17656 49.5399C6.27095 49.6344 6.40669 49.6595 6.52872 49.6053L8.25271 48.8396C9.16765 49.4029 10.1659 49.8174 11.2112 50.0661L11.8883 51.8252C11.9363 51.9498 12.0501 52.0279 12.1835 52.0279H14.9534C15.0869 52.0279 15.2007 51.9498 15.2487 51.8252L15.9256 50.0666C16.9711 49.8178 17.9699 49.4034 18.8849 48.8399L20.6082 49.6053C20.7302 49.6595 20.8659 49.6343 20.9603 49.5399L22.919 47.5813C23.0134 47.4869 23.0387 47.3511 22.9845 47.2291L22.2188 45.5052C22.7821 44.5903 23.1965 43.592 23.4453 42.5467L25.2044 41.8696C25.3289 41.8216 25.4071 41.7078 25.4071 41.5743V38.8044C25.4071 38.6709 25.3289 38.5571 25.2044 38.5092ZM13.5684 46.2713C10.2092 46.2713 7.48648 43.5487 7.48648 40.1895C7.48648 36.8302 10.2092 34.1075 13.5684 34.1075C16.9277 34.1075 19.6504 36.8302 19.6504 40.1895C19.6504 43.5487 16.9277 46.2713 13.5684 46.2713ZM24.1552 45.7078L24.1045 45.5936C24.3978 45.0227 24.6441 44.4286 24.8408 43.8176L25.8105 43.4444C26.5864 43.1457 27.0945 42.4057 27.0945 41.5742V38.8043C27.0945 37.9728 26.5863 37.2328 25.8105 36.9342L25.0512 36.6419H36.0339V30.5477C37.5344 31.4653 38.9067 32.5716 40.1175 33.8344V38.1975L38.438 39.877C37.6455 39.6868 36.7749 39.9003 36.1576 40.5175L30.9675 45.7076L24.1552 45.7078ZM35.5222 18.2851C34.5774 22.9831 30.4278 26.5215 25.4515 26.5215C20.4753 26.5215 16.3256 22.9831 15.3809 18.2851H35.5222ZM41.805 45.7078V44.6789L44.8005 41.6834C45.0908 42.5888 45.3205 43.5213 45.4824 44.477C45.592 45.1244 45.099 45.7079 44.4424 45.7079H41.805V45.7078Z" fill="white"/>
</svg>

                </div>
                <h3 className="text-[#92E4E4] text-xl font-normal mb-2">Skilled Labour</h3>
                <p className="text[#F8F8F8] text-sm max-w-xs mx-auto">
                Trained professionals delivering superior workmanship.
                </p>
            </div>

            {/* Qualified Engineers */}
            <div className="text-center transition-transform hover:scale-110 duration-300">
                <div className="flex justify-center mb-4">
                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.7904 32.5365C37.4033 31.3975 39.2303 28.7914 39.2303 25.7593C39.2303 22.4692 37.0794 19.6836 34.1072 18.7277C34.6466 18.1859 34.9827 17.4417 34.9827 16.6282C34.9827 15.4357 34.2749 14.4027 33.2676 13.9214C33.2214 12.5841 32.9588 11.3025 32.514 10.1102H33.9599L34.9577 12.707C36.3392 13.0353 37.6568 13.5812 38.8678 14.3273L41.4091 13.1974L44.4026 16.1907L43.2768 18.7321C44.023 19.9431 44.5688 21.2607 44.8972 22.6465L47.4897 23.6443V27.8785L44.8972 28.8763C44.5688 30.2579 44.0187 31.5754 43.2768 32.7865L44.4026 35.3278L41.4091 38.3212L39.0509 37.2766C37.8725 35.492 36.4344 33.8941 34.7904 32.5365ZM6.01538 46.9186C4.49965 46.9185 3.27868 46.9184 2.4699 46.9182C2.18867 46.9182 1.92167 46.7949 1.73932 46.5807C1.55705 46.3667 1.47779 46.0834 1.52256 45.8058C2.12142 42.158 3.71507 38.8448 6.01538 36.1528V46.9186ZM7.55869 34.5386C8.32318 33.8234 9.14418 33.168 10.0142 32.5795V38.0471C10.0142 38.4734 10.3597 38.8188 10.7858 38.8188H31.5086C31.9347 38.8188 32.2802 38.4734 32.2802 38.0471V32.576C33.1502 33.164 33.9712 33.8189 34.7357 34.5335V46.9194C27.3181 46.9194 14.9717 46.9193 7.55869 46.9187V34.5386ZM11.5575 31.6349C14.4021 30.0671 17.6712 29.1749 21.1473 29.1749C24.6247 29.1749 27.8931 30.066 30.7369 31.6321V37.2755H11.5575V31.6349ZM36.279 36.1462C38.5824 38.8392 40.179 42.1544 40.7822 45.8047C40.8274 46.0828 40.7482 46.3667 40.5657 46.5812C40.3831 46.7958 40.1155 46.9194 39.8338 46.9194C39.0232 46.9194 37.7989 46.9194 36.279 46.9194V36.1462ZM11.1935 19.6129H31.1009C30.3908 24.4663 26.1921 28.2141 21.1473 28.2141C16.1023 28.2141 11.9036 24.4663 11.1935 19.6129ZM10.5983 15.1689H31.7066L31.7065 15.1703H31.9981C32.7895 15.1703 33.4455 15.8263 33.4455 16.6282C33.4455 17.4196 32.7895 18.0756 31.9981 18.0756H10.3068C9.50495 18.0756 8.84893 17.4196 8.84893 16.6282C8.84893 15.8263 9.50495 15.1703 10.3068 15.1703H10.5984C10.5983 15.1698 10.5983 15.1693 10.5983 15.1689ZM31.7135 13.6255C31.7112 13.6255 31.7089 13.6255 31.7065 13.6255H27.4068V9.16174C27.4068 8.73582 27.061 8.39004 26.6352 8.39004C26.2092 8.39004 25.8635 8.73582 25.8635 9.16174V13.6255H16.431V9.16174C16.431 8.73582 16.0852 8.39004 15.6593 8.39004C15.2334 8.39004 14.8876 8.73582 14.8876 9.16174V13.6255H10.5984C10.596 13.6255 10.5936 13.6255 10.5913 13.6255C10.8714 9.44969 13.5635 5.94398 17.2837 4.49242L17.8675 7.75919C17.9425 8.17847 18.3437 8.45796 18.763 8.38302C19.1822 8.30808 19.4618 7.90686 19.3868 7.48767L18.6617 3.43104C18.6096 2.96074 18.9015 2.68471 19.2697 2.49851C19.7348 2.26321 20.3142 2.14878 20.8359 2.08941C20.9426 2.08345 21.0468 2.08057 21.1473 2.08057C21.2486 2.08057 21.3537 2.08345 21.4613 2.0895C21.9867 2.14888 22.5681 2.26331 23.0344 2.4988C23.4031 2.6849 23.695 2.96055 23.6433 3.42989C23.6432 3.43105 22.9181 7.48767 22.9181 7.48767C22.8431 7.90686 23.1227 8.30808 23.5419 8.38302C23.9612 8.45796 24.3623 8.17847 24.4373 7.75919L25.0206 4.49617C28.7366 5.95013 31.4327 9.45334 31.7135 13.6255Z" fill="white"/>
</svg>

                </div>
                <h3 className="text-[#92E4E4] text-xl font-normal mb-2">Qualified Engineers</h3>
                <p className="text[#F8F8F8] text-sm max-w-xs mx-auto">
                Expert project engineers with extensive technical knowledge.
                </p>
            </div>
            </div>
        </div>
        </div>
        <div className="bg-[#272D2D] text-[#F8F8F8] py-12 px-4">
      <div className="max-w-8xl mx-auto">
        {/* Why Choose Us Section */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-16 mb-6">
            <div className="mr-6 transition-transform hover:scale-110 duration-300">
              <svg width="110" height="179" viewBox="0 0 110 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M36.0977 125.761V123.542C36.1546 113.247 37.1218 105.057 38.9992 98.9705C40.9335 92.8843 43.6643 87.9927 47.1916 84.2955C50.7189 80.5415 55.0142 77.1003 60.0776 73.9719C63.548 71.8105 66.6486 69.45 69.3794 66.8904C72.1671 64.2739 74.3574 61.3731 75.9503 58.1878C77.5433 54.9457 78.3398 51.3338 78.3398 47.3522C78.3398 42.8588 77.2873 38.9625 75.1823 35.6635C73.0773 32.3645 70.2327 29.8049 66.6486 27.9848C63.1213 26.1646 59.1673 25.2545 54.7867 25.2545C50.7474 25.2545 46.9072 26.1362 43.2661 27.8994C39.6819 29.6058 36.6951 32.2223 34.3057 35.7488C31.9731 39.2185 30.6646 43.6266 30.3801 48.9733H0C0.284459 38.1662 2.90147 29.1223 7.85105 21.8418C12.8575 14.5612 19.4569 9.10073 27.6493 5.46043C35.8986 1.82014 45.0013 0 54.9573 0C65.8236 0 75.3814 1.90547 83.6307 5.7164C91.9369 9.52733 98.3941 14.9593 103.002 22.0124C107.667 29.0086 110 37.313 110 46.9256C110 53.4099 108.948 59.2116 106.843 64.3308C104.794 69.45 101.864 74.0003 98.0528 77.9819C94.241 81.9635 89.7181 85.5184 84.4841 88.6468C79.8759 91.4908 76.0926 94.4485 73.1342 97.52C70.2327 100.592 68.0709 104.203 66.6486 108.356C65.2832 112.451 64.572 117.513 64.5151 123.542V125.761H36.0977ZM50.9465 179C45.8262 179 41.4171 177.18 37.7192 173.54C34.0212 169.899 32.1722 165.463 32.1722 160.23C32.1722 155.111 34.0212 150.731 37.7192 147.091C41.4171 143.45 45.8262 141.63 50.9465 141.63C56.0098 141.63 60.3905 143.45 64.0884 147.091C67.8433 150.731 69.7207 155.111 69.7207 160.23C69.7207 163.699 68.8389 166.856 67.0753 169.7C65.3685 172.544 63.0928 174.819 60.2483 176.526C57.4606 178.175 54.36 179 50.9465 179Z" fill="white"/>
              </svg>
            </div>
            <div className="space-y-12">
  {/* Title - Left aligned */}
  <h2 className="text-3xl font-semibold text-[#FFFFFF]">
    Why Choose US ?
  </h2>

  {/* Bullet points below the title */}
  <div className="flex flex-wrap gap-8 md:gap-28">
    {/* Quality Workmanship */}
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-[#00BD32] flex items-center justify-center shrink-0">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm text-white">Quality Workmanship</span>
    </div>

    {/* Competitive Pricing */}
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-[#00BD32] flex items-center justify-center shrink-0">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm text-white">Competitive Pricing</span>
    </div>

    {/* Timely Project Delivery */}
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-[#00BD32] flex items-center justify-center shrink-0">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm text-white">Timely Project Delivery</span>
    </div>
  </div>
</div>
          </div> 
        </div>

        {/* Divider Line */}
        <div className="border-t border-[#6A6B6C] my-8"></div>

        {/* Contact Section */}
        <div className="text-center">
          <h3 className="uppercase text-3xl font-semibold mb-4">
            <span className="text-[#92E4E4]">YOU CAN</span>{" "}
            <span className="text-[#FFFFFF]">REACH US</span>{" "}
            <span className="text-[#92E4E4]">DIRECTLY</span>
          </h3>
          <p className="text-[#F8F8F8] text-md mb-1">
            Al Nakheel, P.O Box 328264, Ras Al Khaimah, UAE 
          </p>
          <p className="text-[#F8F8F8] text-md mb-1">
            alaneeqgm@gmail.com
          </p>
          <p className="text-[#F8F8F8] text-md">
            +97155 4308 183 , +97155 7727768
          </p>
        </div>
      </div>
    </div>
        </div>
    )
    }

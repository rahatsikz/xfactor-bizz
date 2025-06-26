import { Ellipsis } from "lucide-react";

export default function Mobile() {
  return (
    <div className='flex items-center justify-center'>
      {/* Phone Container */}
      <div className='relative'>
        {/* Phone Body/Frame */}
        <div className='relative w-68 h-[500px] md:w-80 md:h-[600px] bg-background rounded-3xl  lg:rounded-[3rem] p-2 shadow-2xl'>
          {/* Phone Screen */}
          <div className='relative w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden'>
            {/* Notch */}
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-50 border-2 border-gray-800'>
              {/* Speaker */}
              <div className='absolute top-2 left-1/2 transform -translate-x-1/2 w-14 h-1.5 bg-gray-600 rounded-full'></div>
              {/* Camera */}
              <div className='absolute top-[7px] right-5 w-2 h-2 bg-gray-700 rounded-full border border-gray-600'></div>
            </div>

            {/* Screen Content Area */}
            <div className='relative w-full h-full rounded-[2.5rem] overflow-hidden bg-black'>
              {/* Top Dark Area (for notch) */}
              <div className='absolute top-0 left-0 right-0 h-16 bg-background z-30'></div>

              {/* Instagram Header */}
              <div className='absolute top-7 left-0 right-0 z-40 bg-background backdrop-blur-sm px-5 lg:py-4 py-2'>
                <div className='flex items-center space-x-2'>
                  {/* Instagram Logo */}
                  <div className='w-4 h-4 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center'>
                    <svg
                      className='w-5 h-5 text-white'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                    </svg>
                  </div>

                  {/* Instagram Text */}
                  <span className='text-white font-semibold text-base tracking-wide'>
                    Instagram
                  </span>

                  {/* Spacer */}
                  <div className='flex-1'></div>

                  {/* Menu Dots */}

                  <Ellipsis className='text-white' />
                </div>
              </div>

              {/* Video Content Area */}
              <div className='absolute top-16 left-0 right-0 bottom-0 overflow-hidden'>
                <video
                  src='/perahin.mp4'
                  autoPlay
                  loop
                  muted
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Screen Overlay for Realistic Effect */}
              <div className='absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/5 pointer-events-none z-10'></div>
            </div>

            {/* Home Indicator */}
            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full'></div>
          </div>

          {/* Side Buttons */}
          {/* Volume Buttons */}
          <div className='absolute left-0 top-24 w-1 h-8 bg-gray-800 rounded-r-sm'></div>
          <div className='absolute left-0 top-36 w-1 h-8 bg-gray-800 rounded-r-sm'></div>

          {/* Power Button */}
          <div className='absolute right-0 top-32 w-1 h-12 bg-gray-800 rounded-l-sm'></div>
        </div>

        {/* Phone Reflection */}
        <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[3rem] pointer-events-none'></div>

        {/* Phone Shadow */}
        <div className='absolute -bottom-4 left-4 right-4 h-8 bg-black/20 rounded-full blur-xl'></div>
      </div>
    </div>
  );
}

import React from 'react'

const Navbar = ({ setIsOpen }) => {
  return (
    <div className='lg:hidden block sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-purple-50'>
      <div className='flex justify-between px-6 items-center p-3'>
        <div>
          <img src="/assets/logo.svg" width={40} alt="" />
        </div>
        <div 
          className='cursor-pointer p-1 hover:bg-purple-50 rounded-lg transition-all active:scale-95'
          onClick={() => setIsOpen(true)}
        >
          <img src="/assets/Hamburger.svg" width={30} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
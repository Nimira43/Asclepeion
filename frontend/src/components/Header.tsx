import React from "react"
import { assets } from "../assets/assets"

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-light rounded-lg px-6 md:px-10 lg:px-20'>
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] '>
      <p className='text-5xl lg:text-4xl md:text-3xl text-primary font-bold leading-tight lg:leading-tight md:leading-tight'>We prioritise your health.</p>
      <p className='text-5xl lg:text-4xl md:text-3xl text-primary font-bold leading-tight lg:leading-tight md:leading-tight'>With compassion and expertise.</p>
      <p className='text-base md:text-sm lg:text-[20px] text-dark font-medium leading-normal md:leading-relaxed lg:leading-loose'>Our dedicated team of professionals is here to provide personalised care, ensuring your well-being and peace of mind.</p>
      <a href="#" className='uppercase font-semibold bg-primary text-light px-3 py-2 rounded-md hover:bg-primary-lg hidden md:block' >
        Book Appointment
      </a>
      </div>
      <div className='md:w-1/2 relative'>
        <img
          className='w-full md:absolute bottom-0 h-auto rounded-lg' 
          src={assets.header2} 
          alt='Healthcare professionals'
        />
      </div>     
    </div>
  )
}

export default Header

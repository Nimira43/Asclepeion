import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#1880f0]'>  
      {/* Primary colour #0d6a0d Secondary colour #1880f0 */}
      <h1 className='logo cursor-pointer'>Asclepeion</h1>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink>
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
        </NavLink>
        <NavLink>
          <li className='py-1'>Doctors</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
        </NavLink>
        <NavLink>
          <li className='py-1'>Contact</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
        </NavLink>
        <NavLink>
          <li className='py-1'>About</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
        </NavLink>
      </ul>
      <div>
        <button>Register Today</button>
      </div>
    </div>
  )
}

export default Navbar

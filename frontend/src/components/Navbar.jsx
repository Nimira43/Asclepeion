import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-secondary-lg'>  
      <h1 className='logo cursor-pointer text-primary'>Asclepeion</h1>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink>
          <li className='py-1 uppercase font-medium'>Home</li>
          <hr className='border-none outline-none h-[1px] bg-secondary-lg w-3/5 m-auto' />
        </NavLink>
        <NavLink>
          <li className='py-1 uppercase font-medium'>Doctors</li>
          <hr className='border-none outline-none h-[1px] bg-secondary-lg w-3/5 m-auto' />
        </NavLink>
        <NavLink>
          <li className='py-1 uppercase font-medium'>Contact</li>
          <hr className='border-none outline-none h-[1px] bg-secondary-lg w-3/5 m-auto' />
        </NavLink>
        <NavLink>
          <li className='py-1 uppercase font-medium'>About</li>
          <hr className='border-none outline-none h-[1px] bg-secondary-lg w-3/5 m-auto' />
        </NavLink>
      </ul>
      <div>
        <button className='uppercase font-semibold bg-primary text-light px-3 py-2 rounded-md hover:bg-primary-lg'>Register Today</button>
      </div>
    </div>
  )
}

export default Navbar

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-secondary'>  
      <h1 className='logo cursor-pointer text-primary'>Asclepeion</h1>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1 uppercase font-semibold text-dark hover:text-primary-lg'>Home</li>
          <hr className='border-none outline-none h-[1px] bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1 uppercase font-semibold text-dark hover:text-primary-lg'>Doctors</li>
          <hr className='border-none outline-none h-[1px] bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1 uppercase font-semibold text-dark hover:text-primary-lg'>Contact</li>
          <hr className='border-none outline-none h-[1px] bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1 uppercase font-semibold text-dark hover:text-primary-lg'>About</li>
          <hr className='border-none outline-none h-[1px] bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div>
        <button className='uppercase font-semibold bg-primary text-light px-3 py-2 rounded-md hover:bg-primary-lg'>Register Today</button>
      </div>
    </div>
  )
}

export default Navbar

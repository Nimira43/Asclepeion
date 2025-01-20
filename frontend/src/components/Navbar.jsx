import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#1880f0]'>
      <h1 className='logo cursor-pointer'>Asclepeion</h1>
      <ul>
        <NavLink>
          <li>Home</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>Doctors</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>Contact</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>About</li>
          <hr />
        </NavLink>
      </ul>
      <div>
        <button>Register Today</button>
      </div>
    </div>
  )
}

export default Navbar

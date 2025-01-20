import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h1 className='logo'>Asclepeion</h1>
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
    </div>
  )
}

export default Navbar

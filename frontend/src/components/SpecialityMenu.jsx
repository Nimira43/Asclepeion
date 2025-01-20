import { Link } from 'react-router-dom'
import { specialityData } from '../assets/assets'

const SpecialityMenu = () => {
  return (
    <div id='speciality'>
      <h1>Search for a Specialist</h1>
      <p>We offer specialist help across multiple fields of healthcare. Click on the icons below to find out more:</p>
      <div>
        {specialityData.map((item, index) => (
          <Link key={index}to={`/doctors/${item.speciality}`}>
            <img src={item.image} alt='Specialist Field' />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
